import React, {useEffect, useState} from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router';

function DataPrivacySigning() {
    const [q1, setQ1] = useState("")
    const [q2, setQ2] = useState("");

    const [sent1, setSent1] = useState("Do you consent to the use of your coded data and biosamples for future research?");
    const [sent2, setSent2] = useState("This is optional, and you can review your answers before you submit. You can also skip this question for now.");

    const [sent3, setSent3] = useState("I consent to the use of my coded data and biosamples for future research, and where necessary for the research, possible analyses of my genetic information.");
    const [sent4, setSent4] = useState("I consent to an optional biopsy at disease progression (if my disease gets worse).")
    const [yes, setYes] = useState("Yes");
    const [no, setNo] = useState("No");

    let router = useRouter();
    const imageLoader = require("./loader");

    const handleQuestion1Click = (value) => {
       if (q1 == "yes" || q1 == 'no') {
            setQ1("");
       } else if (q1 == "") {
           setQ1(value);           
       }
    }

    const handleQuestion2Click = (value) => {
       if (q2 == "yes" || q2 == 'no') {
            setQ2("");
       } else if (q2 == "") {
           setQ2(value);           
       }
    }

    useEffect( () => {
        let targetLanguage = router.asPath.slice(12);

        if (targetLanguage) {
            translateSection("en", targetLanguage);
            translateQ("en", targetLanguage);
        }     


    }, [])


  async function translateSection(sourceLanguage, targetLanguage) {
    let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
    let consolidatedData = sent1 + " **** " + sent2 + " **** " + sent3 + " **** " + sent4;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Accept" : "text/plain"
        },
        method: 'POST',
        mode: 'cors',
        body: consolidatedData
    });
        const res = await response;
        res.text().then(body => {
            let splitArray = body.split("****");
            let translatedSent1 = splitArray[0];
            let translatedSent2 = splitArray[1];
            let translatedSent3 = splitArray[2];
            let translatedSent4 = splitArray[3];

            setSent1(translatedSent1);
            setSent2(translatedSent2);
            setSent3(translatedSent3);
            setSent4(translatedSent4);
        })  
  }

  async function translateQ(sourceLanguage, targetLanguage) {
    let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
    let consolidatedData = yes + " **** " + no;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Accept" : "text/plain"
        },
        method: 'POST',
        mode: 'cors',
        body: consolidatedData
    });
        const res = await response;
        res.text().then(body => {
            let splitArray = body.split("****");
            let translatedSent1 = splitArray[0];
            let translatedSent2 = splitArray[1];

            setYes(translatedSent1);
            setNo(translatedSent2);

        })  
  }

  return (
    <>
    <div className="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14"
    style={{backgroundColor: "#E6F7F2"}}>
    <div className="flex flex-row">
        <div className="basis-1/2">
            <Image loader={imageLoader}  unoptimized src="http://localhost:8080/img/consent.png" alt="Consent" width={500} height={500} className="h-80px mr-20" />
        </div>
    </div>

    <div>
        <div>
        <div>
            <p className="boxText" style={{fontSize:"20px"}}>
            <b>{sent1}</b> <br />
            <span style={{fontSize: "16px !important"}}>{sent2}</span>
            </p>

            <p className="pageText" style={{fontSize: '14px', marginTop: '0px', fontWeight:'700'}}>
            {sent3}
            </p>

            <div style={{display: 'flex', marginBottom:'2rem'}}>
                <div style={{display: 'flex'}}>
                    <div style={{marginRight: '10px'}}>
                        {yes} 
                    </div>
                    
                    <input type="checkbox" checked={q1 == "yes"}  onChange={() => handleQuestion1Click("yes")} style={{width:'30px', height:'30px', marginRight:'15px'}} />
                </div>

                <div style={{display: 'flex'}}>
                    <div style={{marginRight: '10px'}}>
                        {no} 
                    </div>

                 <input type="checkbox" checked={q1 == "no"} onChange={() => handleQuestion1Click("no")} style={{width:'30px', height:'30px', marginRight:'15px'}} />
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default DataPrivacySigning