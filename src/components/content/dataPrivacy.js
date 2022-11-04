import React, {useEffect, useState} from 'react'

import { useRouter } from 'next/router';

import audioCallout from '../../images/audioCallout.png';

export default function DataPrivacy() {
  let [dataPrivacyContent, setDataPrivacyContent] = useState("");
  let [language, setLanguage] = useState("");
  let router = useRouter();

  const dataPrivacyContentSection =
        `        
        <div className={classes.subtitle} id="Overview">
          What will happen to my data and biosamples gathered in the study?    
        </div>

        <div className={classes.roundBox}>
          <Grid container spacing={2} style={{padding:'25px'}}>
            <Grid item>
              <p>
                <img src={NowImage} style={{height:'80px'}} />
              </p>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container spacing={3}>
                <Grid item xs>
                  <p  style={{marginBottom:'15px'}} className="boxText">
                   <b> Your data will be kept for 15 years, </b> unless there is a legal requirement for keeping it longer. 
                  </p>
                  <p  className="boxText">
                    <b>Your name and contact details will only be available to a small number of people,</b> including the study doctor and team at the study site. When information from the study is shared more widely, your data will be <b>anonymized</b>, meaning it is separated from your contact information.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </div>
        
        <div id="Collection of Data" className={classes.subtitle2}>
          Which data and biosamples are collected?
        </div>
          <p className="pageText">
            In order to conduct the study, the study site will have to collect and register a) information
            about your identity, b) data that is necessary to assess your health conditions, and c) data collected via smartphone, websites, devices and/or apps. Your answers to questionnaires using a smartphone or handheld device will
            also be collected. See the below table for a complete list. 
          </p>


          <table style={{width: '100%'}}>
            <thead >
              <th>Data and Biosamples Collected</th>
            </thead>
            <Grid container>
              <Grid item xs={4} md={4} style={{borderRight: '3px solid #E0DEDE', padding:'10px'}}>
                <div className='tableSectionTitle'>
                  IDENTITY
                </div>   
                <div className='tableSectionContent'>
                  <li>Name</li>
                  <li>Address</li>
                  <li>Telephone number</li>
                  <li>Health insurance number</li>
                </div>           
              </Grid>
              <Grid item xs={4} md={4} style={{borderRight: '3px solid #E0DEDE', padding:'10px'}}>
                <div className='tableSectionTitle'>
                  HEALTH CONDITION
                </div>
                <div className='tableSectionContent'>
                  <li>Medical condition</li>
                  <li>Medical history</li>
                  <li>Lifestyle</li>
                  <li>Demographics (age, gender, ethnic and racial background)</li>
                  <li>Clinical images</li>
                  <li>Biosamples</li>
                  <li>Data generated from tumour samples, clinical images, and biosamples (including genetic data) if available </li>
                </div>
              </Grid>
              <Grid item xs={4} md={4} style={{padding:'10px'}}>
                <div className='tableSectionTitle'>
                  FROM TECH
                </div>
                <div className='tableSectionContent'>
                  <li>IP address</li>
                  <li>Location data</li>
                  <li>Device ID</li>
                  <li>E-mail addres</li>
                  <li>App account information </li>
                  <li>Audio recordings/diaries</li>
                  <li>Interactive patient communications</li>
                </div>
              </Grid>
            </Grid>

          </table>
          {/*  */}

        <div id="Need for Data" className={classes.subtitle2}>
          What are my data and biosamples needed for?
        </div>
          <p className="boxText">
            Your data and biosamples are needed by AstraZeneca to develop the drug(s), get
            permission to introduce and keep it on the market, monitor its safety and get it reimbursed
            by governments i.e., throughout the drug development program. Therefore, they will be
            used as planned in this study as well as within related research activities necessary for this
            drug development program in order to:        
          </p>

          <div className="grid-container">
            <div className="item1">
              <Grid container spacing={2} >
                <Grid item style={{paddingTop: '0px'}}>
                    <div className="bignumber" >1</div>
                </Grid>
                
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs style={{textAlign: 'left', paddingTop: '5px'}}>
                      <div style={{marginBottom: '20px'}} className="chart2"><b>Understand how the study treatment(s) and similar drugs work in the body</b>
                      </div>
                    
                      <div className="chart2">
                        (i.e., evaluate the study treatment mode of action, alone or in combination with other study
                        treatments)
                        </div>
                    
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            
            </div>
            <div className="item2">
              <Grid container spacing={2} >
                <Grid item style={{paddingTop: '0px'}}>
                    <div className="bignumber">2</div>
                </Grid>
                
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs style={{textAlign: 'left', paddingTop: '5px'}}>
                      <div className="chart2"><b>Better understand the studied disease </b>and associated health problems
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className="item3">
              <Grid container spacing={2} >
                <Grid item style={{paddingTop: '0px'}}>
                    <div className="bignumber">3</div>
                </Grid>
                
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs style={{textAlign: 'left', paddingTop: '5px'}}>
                      <div className="chart2">
                        <b>Develop diagnostic tests</b> for the disease
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>  

            <div className="item4">
              <Grid container spacing={2} >
                <Grid item style={{paddingTop: '0px'}}>
                    <div className="bignumber">4</div>
                </Grid>
                
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs style={{textAlign: 'left', paddingTop: '5px'}}>
                      <div className="chart2">
                        <b>Learn from past studies </b> to plan new studies or improve scientific analysis methods
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>  

            <div className="item5">
              <Grid container spacing={2} >
                <Grid item style={{paddingTop: '0px'}}>
                    <div className="bignumber">5</div>
                </Grid>
                
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs style={{textAlign: 'left', paddingTop: '5px'}}>
                      <div className="chart2">
                        <b>Publish research results </b>in scientific journals or use them for educational purposes
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        

        <div id="Storage of Data" className={classes.subtitle2}>
          How long will my coded data and biosamples be kept?
        </div>
          <p className="boxText">
            The study site and the sponsor are obliged to keep all study data for 15 years after the
            end of the study, unless there is a legal requirement for keeping them longer. Your coded
            data will then be deleted or anonymized, and your biosamples destroyed as soon as
            possible, unless you authorize the sponsor to use them for future research (a tick-box
            available in Part 3: “Consent Form” will allow you to make this choice). For more details
            about anonymization, see Part 1 Section 11f: “What does anonymized data mean?” or
            internal Document Retention policy you may go to <a href="astrazenecapersonaldataretention.com" style={{color:"#008764"}}>astrazenecapersonaldataretention.com</a>   
          </p>
        <div id="My Rights to Data" className={classes.subtitle2}>
          What are my rights under data protection law? 
        </div>
          <p className="boxText">
            You have the right to review which of your data are collected and being used; you can also
            ask for a copy of this data, ask for restriction of use of this data, or ask to have incorrect
            data rectified. You may also ask the study doctor to receive a copy of the data you have provided for future research in a standardized electric format or to have them transmitted
            to another person of your choice.<br /><br />
            To ensure the scientific integrity of the study, you will not be able to review some of the
            data or receive a copy of it until the study ends; both you and the study doctor will know
            you are receiving the study treatment.<br /><br />
            To exercise these restricted rights, please contact preferably the study doctor.          
          </p>
        
        <div className={classes.subtitle2} style={{marginBottom:'20px'}}>
          What does anonymized data mean? 
        </div>
          <div className="avatarBox">
            <img src={Avatar} />
            <img src={Avatar} />
            <img src={Avatar} />
            <img src={Avatar} />
          </div>
          <p className="boxText">
            Health authorities as well as pharmaceutical companies believe that access to clinical
            studies data advances clinical science and medical knowledge and is in the best interest
            of patients and public health, provided that patient privacy is protected. Therefore, the
            sponsor may generate and share internally or with other researchers an anonymized set
            of your data collected in the study (e.g., on <a href="clinicalstudydatarequest.com" style={{color:"#008764"}}>clinicalstudydatarequest.com</a>). This
            means your coded data will be stripped of your Patient code as well as of any other
            information that could reasonably be used to identify you such as your date of birth.      
          </p>
        <div id="Consent to Future Research" className={classes.subtitle2}>
          Option to consent to future research
        </div>
          <div className={classes.roundBox}>
              <Grid container spacing={2} style={{padding:'25px'}}>
                <Grid item>
                  <p>
                    <img src={Future} style={{height:'80px'}} />
                  </p>
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={3}>
                    <Grid item xs>
                      <p  style={{marginBottom:'15px'}} className="boxText">
                        In addition to participating in the clinical study, we would like to know if you would be willing
                        that your coded data and leftover biosamples and images are used in
                        future research projects with appropriate ethical approval. <br />
                        You are free to consent to the use of your coded data and biosamples for future research.
                        If you decide not to do so, you may still take part in the clinical study.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              
            </div>
              <p className="boxText">
              Future research is important to advance science and public health. At present, however, it
              is not possible to foresee all details of future scientific research projects. These future
              scientific research projects are beyond the scope of the clinical study and use of sample
              and data as outlined in Part 1 and may occur whilst the study is ongoing or after the study
              has finished. Your coded data, biosamples, and images may only be used for scientific
              health-related research to find new ways to detect, treat, prevent or cure health problems.
              <br /> <br />
              They may also be used jointly with information from other sources outside typical clinical
              research settings, e.g. from public research databases. <b> However, they will not be combined
              with other information in a way that could identify you. </b>Your coded data and biosamples
              may also be anonymized for some of the future scientific research. Some research
              projects may require the analysis of your genetic information. Remaining blood samples
              collected for PK and ADA analysis, ctDNA, blood biomarkers and tumour samples will be
              used to future analysis if you can consent for future research.
            </p>


          <div className={classes.roundBox} style={{backgroundColor: "#E6F7F2"}}>
              <Grid container spacing={2} style={{padding:'25px'}}>
                <Grid item>
                  <p>
                    <img src={Consent} style={{height:'80px'}} />
                  </p>
                </Grid>

                <Grid item xs={12} sm container style={{paddingLeft: '25px'}}>
                  <Grid item xs container spacing={2}>
     
                    <Grid item xs>
                      <p className={classes.subtitle2} style={{marginBottom: '0', textShadow: "0px 4px 3px #c0c0c0",}}>Do you consent to the use of your coded data and biosamples for future research?</p>
                      <p  style={{marginBottom:'15px', marginTop: "0"}} className="boxText">
                        This is optional, and you can review your answers before you submit. You can also skip this question for now.
                      </p>
                      <p  style={{ marginTop: "0"}} className="boxText">
                        <b>I consent to the use of my coded data and biosamples for future research, and where necessary
                        for the research, possible analyses of my genetic information.             </b>         
                      </p>

                      <div style={{display:'flex', alignItems: 'center'}}>
                        <div style={{display:'flex', alignItems: 'center'}}>
                          <Checkbox sx={{ color: 'white', height: '30px', width: '30px'}}/> <div className="boxText">Yes</div> 
                        </div>

                        <div style={{display:'flex', alignItems: 'center'}}>
                          <Checkbox sx={{ color: 'white'}} /> <div className="boxText">No</div> 
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
      `
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setLanguage('en');
      setDataPrivacyContent(dataPrivacyContentSection);
    }

    if (targetLanguage) {
      setLanguage(targetLanguage);
      setDataPrivacyContent(translateSection('en', targetLanguage))
    }

  }, [])

  console.log(language, 'current language')
  
  async function translateSection(sourceLanguage, targetLanguage) {
    setLanguage(targetLanguage)

    const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr', {
        method: 'GET',
        // method: POST,
        mode: 'cors',
        // body: {
        //   text: {dataPrivacyContentSection},
        //   SourceLanguageCode: {sourceLanguage},
        //   TargetLanguageCode: {targetLanguage}
        // }
    });
  
    const json = await response.json();
    return json; 
    // return and convert back to HTML to render? 
    // setPurposeContent(response.json());

    // Then youd return dangerouslySetInnerHTML={{__html: {purposeContent}}}
  }

  return (
    <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: dataPrivacyContent} } />
  )
}

