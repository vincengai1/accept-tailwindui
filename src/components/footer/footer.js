import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";

 import LeftArrow from './leftArrow.png';
import RightArrow from './rightArrow.png';

import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux'
import { addQuestion, removeQuestion } from '../../slices/formSlice';


export default function Footer({prev, next}) {
    const [isChecked, setIsChecked] = useState(false);
    const [sent1, setSent1] = useState("I have a question about this section"); 
    const [sent2, setSent2] = useState("We'll make a note of this, so you can review with the trial team later.");
    const [before, setBefore] = useState("Before");
    const [nextPage, setNextPage] = useState("Next");
    const questionsList = useSelector((state) => state.form.questions)
  const imageLoader = require("../content/loader");

    let router = useRouter();
    let lango = router.asPath.slice(12);

    const dispatch = useDispatch()
 
    useEffect( () => {
    let targetLanguage = router.asPath.slice(12)
    if (targetLanguage) {
        translateSection("en", targetLanguage);
        translateBottom("en", targetLanguage);
    }     
    }, [])

    useEffect( () => {
        if (questionsList.includes(location.pathname.slice(1))) {
            setIsChecked(true);
        }
        toggleChange();
    }, [])

    const toggleChange = () => {
        if (!questionsList) return;

        if (questionsList.includes(location.pathname.slice(1))) {
            setIsChecked(true);
        }
    };

  async function translateBottom(sourceLanguage, targetLanguage) {
    let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
    let consolidatedData = before + " |||| " + nextPage;

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
            let splitArray = body.split(" |||| ");
            let translatedSent1 = splitArray[0];
            let translatedSent2 = splitArray[1];

            setBefore(translatedSent1);
            setNextPage(translatedSent2);
        })  
  }

  async function translateSection(sourceLanguage, targetLanguage) {
    let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
    let consolidatedData = sent1 + " |||| " + sent2;

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
            let splitArray = body.split(" |||| ");
            let translatedSent1 = splitArray[0];
            let translatedSent2 = splitArray[1];

            setSent1(translatedSent1);
            setSent2(translatedSent2);
        })  
  }

    const handleQuestionClick = () => {

        if (isChecked == false) {
            setIsChecked(true);
            dispatch(addQuestion(location.pathname.slice(1,2)))
        } else if (isChecked == true) {
            setIsChecked(false);
            dispatch(removeQuestion(location.pathname.slice(1,2)))
        }
    }
    
    
  return (
    <div style={{marginTop:'5rem'}}>
        <div style={{height: "200px", width:'100%', backgroundColor: "#F5F5F5", display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '5px'}}>
            <input type="checkbox" checked={isChecked} style={{width:'30px', height:'30px', marginRight:'15px', marginLeft: '15px'}} onChange={() => handleQuestionClick()}/>
            <div>
                <div style={{fontFamily: "Noto Serif !important", fontWeight: '900', fontSize: '20px', lineHeight:'120%', color: '#244150'}}>
                    {sent1}
                </div>
                <div>
                    {sent2}
                </div>
            </div>
        </div>

        <div style={{ height: '100px', width: '100%', backgroundColor: "#244150", color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>  
                <button style={{background: 'none', border: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none', color: 'white', cursor: 'pointer'}}>
                    <Link
                        href={{
                        pathname: `${prev}`,
                        query: {
                            language: `${lango}`,
                        }
                        }}
                        className="flex items-center text-sm font-bold leading-6 text-astraGreen-100 hover:text-astraGreen-200 active:text-astraGreen-300"
                        style={{textDecoration:'none',}}        
                    >
                        {/* <ExportedImage    unoptimized={true} width={500} height={500} alt="leftArrow" src={LeftArrow} style={{marginRight:'15px', marginLeft: '5px',  height:'38px', width:'30px'}}/> */}
                        {before}
                    </Link>
                </button>

                <button  style={{background: 'none', border: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none', color: 'white', cursor: 'pointer',}}>
                    <div style={{marginRight:'15px' }}>
 
                        <div style={{ fontFamily: "Noto Sans, sans-serif !important", lineHeight: '27px', fontSize: '18px', weight: '700'}}>
                            <Link
                                href={{
                                pathname: `${next}`,
                                query: {
                                    language: `${lango}`,
                                }
                                }}
                                className="flex items-center text-sm font-bold leading-6 text-astraGreen-100 hover:text-astraGreen-200 active:text-astraGreen-300"
                                style={{textDecoration:'none', }}        

                            >
                                {nextPage} 
                                {/* <ExportedImage unoptimized={true} width={500} height={500} alt="rightArrow" src={RightArrow} style={{marginLeft:'15px', marginRight: '5px', height:'38px', width:'30px', color:'white'}}/> */}
                            </Link>
                        </div>
                    </div>
                </button>
        </div>
    </div>
  )
}

