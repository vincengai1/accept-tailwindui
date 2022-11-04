import React, {useEffect, useState} from 'react'

import { useRouter } from 'next/router';

import audioCallout from '../../images/audioCallout.png';

export default function Purpose() {
  let [purposeContent, setPurposeContent] = useState("");
  let [language, setLanguage] = useState("");
  let router = useRouter();

  const purposeContentSection =
        `        

        <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
          <div container spacing={2} class="flex flex-row">
            <div  class="basis-1/2">
                <img src="https://brandmark.io/intro/info.png" class="h-80px mr-20" />
            </div>

            <div item xs={12} sm container>
              <div item xs container  spacing={3}>
                <div item xs>
                  <p   className="boxText">
                   Most of the potential side effects are <b>common</b> with cancer treatment.  <br /><br />
                    
                  <b>1 serious side effect has been reported with T-DXd:</b> <span style="color: #008764; font-weight:bold;">lung problems (pneumonitis/interstitial lung disease (ILD)</span>. These lung problems may be life-threatening or fatal. Symptoms may be similar to
                      other lung or heart diseases. Your doctor will check for these signs and symptoms while you receive treatment with T-DXd and may treat you with corticosteroid medications. If you develop serious lung problems during the study, they may also delay or stop your treatment.             
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-7 font-serif text-md font-bold "  id="New Information">
          What are the risks of joining the study? 
        </div>

        <p className="pageText" style={{marginBottom: '2rem'}}>
          There is a risk that your MBC will not get better, or even get worse during the study. It is
          possible that some patients could have side effects that we do not know about yet. If you
          have severe side effects from any of the study treatments, the study doctor may ask you
          not to continue in the study. <br /><br />
          Some normal cells also have small amounts of HER2 on their surface that could bind to
          trastuzumab deruxtecan. This binding to normal cells could lead to side effects. The
          chemotherapy molecule DXd can also damage neighbouring cells after killing a cancer
          cell. This could also cause side effects.<br /><br />
          <b>The possible discomforts, side effects, and risks related to trastuzumab deruxtecan
          treatment are not all known.</b> Based on all the health data collected, the following adverse
          events (AEs) have been reported and identified as risks associated with the use of
          trastuzumab deruxtecan.
        </p>


        <div class="mb-5 mt-14 font-serif text-md font-bold "  id="Risks of T-DXd">
            Possible risks associated with trastuzumab deruxtecan, T-DXd    
        </div>


        <TabPanel value={value} index={0}>
           May affect more than 1 in 10 people.
          <hr class="solid"  style="margin-bottom: 1rem; margin-top: 1rem;">
                <div style="display:flex; align-items:flex-start;">
                    <div>
                        <li>nausea</li>
                        <li>feeling tired(fatigue)</li>
                        <li>vomitting</li>
                        <li>hair loss</li>
                        <li>constipation</li>
                        <li>feeling less hungry</li>
                        <li>decrease in the number of red blood cells (anemia)</li>
                        <li>decrease in the number of neutrophils (neutropenia)</li>
                        <li>diarrhea</li>
                        <li>decrease in the number of platelets (thrombocytopenia)</li>
                        <li>coughing</li>
                    </div>
                    <div>
                        <li>decrease in the number of white blood cells (leukopenia)</li>
                        <li>stomach (abdominal) pain</li>
                        <li>infections of the upper respiratory tract</li>
                        <li>headache</li>
                        <li>dry eye</li>
                        <li>indigestion (dyspepsia)</li>
                        <li>dizziness</li>
                        <li> sores in or around your mouth (stomatitis)</li>
                        <li>abnormal liver enzyme results (increase in aspartate aminotransferase)</li>

                    </div>
                    <div>
                        <li>difficulty breathing (dyspnea)</li>
                        <li>severe nose bleeds (epistaxis)</li>
                        <li style={{fontWeight:'bold', color:'#008764'}}>lung problems (interstitial lung disease/pneumonitis)</li>
                        <li>low potassium in the blood (hypokalemia)</li>
                        <li>rash</li>
                        <li>general body weakness (malaise) </li>
                        <li>decrease in the number of lymphocytes (lymphopenia)</li>
                        <li>fever (pyrexia)</li>
                        <li>swelling of lower legs or hands (edema peripheral)</li>
                    </div>
                </div>
            </TabPanel>

        <hr class="solid"  style="margin-bottom: 5rem; margin-top: 2rem;">

        <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  id="Serious Side Effects" >
            <img src={ExclamationImage} style="margin-right: 10px"/>  Serious side effect  
        </div>

        <p className="pageText" style={{marginBottom: 2rem}}>
          <span style={{color:#008764}}><b>Lung problems (pneumonitis/interstitial lung disease) </b></span>are a common and serious side effect of trastuzumab deruxtecan. These lung problems may be life-threatening or fatal. 
        </p>

        <img src={ILDImage} style={{marginBottom:2rem, width: 100%}}/>

        <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  id="Serious Side Effects" >
            <img src={SyringeImage} style="margin-right: 10px"/> Symptoms 
        </div>

        <p className="pageText" style={{marginBottom: 2rem}}>
          Symptoms may be similar to
          other lung or heart diseases. Tell your doctor right away while receiving treatment with trastuzumab deruxtecan if you
          notice any of the following signs and symptoms:
            <br /><br />
          <li>New or worsening cough</li>
          <li>Trouble breathing</li>
          <li>New or worsening shortness of breath or other breathing issues</li>
          <li>Fever</li>
        </p>

        <p className="pageText" style={{marginBottom: 2rem}}>
          Getting medical treatment right away may keep
          these problems from becoming more serious.
        </p>

        <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >
            <img src={MedicalHistory} style="margin-right: 10px"/> Medical history  
        </div>
        
        <p className="pageText" style={{marginBottom: 2rem}}>
          Tell your doctor about any lung problems you have or have had in the past, in particular if you have a history of lung problems including inflammation of the lung known as
          interstitial lung disease (ILD) or pneumonitis.
        </p>

                <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >

            <img src={MonitorImage} style="margin-right: 10px"/> Monitoring  
        </div>
        
        <p className="pageText" style={{marginBottom: 2rem}}>
            Your doctor will check for signs and symptoms of lung problems while you receive
            treatment with trastuzumab deruxtecan and may treat you with corticosteroid medications.
            Your study treatment may also need to be delayed or completely stopped if you develop
            serious lung problems while on the study.
        </p>

                <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >

            <img src={ExclamationImage} style="margin-right: 10px"/> Serious reactions to look out for   
        </div>
        
        <p className="pageText" style={{marginBottom: 2rem}}>
            The risks described below could possibly be observed with trastuzumab deruxtecan administration. Tell your doctor about any heart problems you have or have had in the past. Tell your study doctor/study staff immediately if you develop any of the following symptoms:
            <br /><br />

            <li><b>Heart problems:</b>
              The heart is a pump to circulate blood to the whole body. If the heart does not pump the way it should you may experience shortness of breath, noticeably rapid, strong or irregular heartbeat or abnormally rapid heart rate.
            <br /><br />
            </li>
            <li><b>Trastuzumab deruxtecan Allergic reactions/Hypersensitivity:</b>
              Sometimes people have allergic reactions to medications. Symptoms of allergic reactions can include rash, joint pain, face, lip or tongue     swelling, wheezing and difficulty breathing, and/or sudden drop in blood pressure. A severe allergic reaction could be life threatening. Your physician is trained to treat these emergencies.            
            <br /><br />
            </li>
            <li><b>Infusion reactions:</b>
              The symptoms which occur during injection of drug or after the injection of drug     (within the day in many cases) are called ‘infusion reactions’. The symptoms may include, fever, chills, nausea, vomiting, headache, cough, dizziness, rash, and/or lower back pain usually of mild to moderate severity and may lead to shortness of breath and severe lowering of blood pressure.            
            </li>
        </p>

                <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >

            <img src={YellowAlert} style="margin-right: 10px"/> Share with your doctor  
        </div>
        <p className="pageText" style={{marginBottom: 2rem}}>
          <li> <b> Tell your doctor about any other medical problems</b> you have or have had in the past.</li>
          <li> <b>Tell your doctor about all the medicines you take, </b>including prescription and over-the-counter medicines, vitamins, and herbal supplements. Know the medicines you take. Keep a list of them to show your doctor and pharmacist when you get a new medicine. </li>
          <li> <b>Use of chloroquine or hydroxychloroquine is not allowed during the study treatment. </b>Please inform your doctor right away if you plan take these medications before starting or while taking trastuzumab deruxtecan treatment.</li>
          <li>Risks associated with the of use of tobacco products, e-cigarettes or vaping while on treatment with trastuzumab deruxtecan are not known.<b> Use of tobacco products, e-cigarettes and vaping is strongly discouraged. </b> Tell your doctor about any prior or current use of these products.</li>
        </p>
                <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >

            <img src={YellowAlert} style="margin-right: 10px"/> Unexpected risks 
        </div>
        <p className="pageText" style={{marginBottom: 2rem}}>
        The study medication might have other adverse effects that are not known at this time. It
        is possible that your condition might worsen during your participation in this study. You will
        be told about any relevant or new information that might change your decision to continue
        to be in this study.
        </p>

          <hr class="solid"  style="margin-bottom: 1rem; margin-top: 1rem;">
      
                <div style="margin-bottom:10px; display: flex; align-items: center" class="font-serif text-md font-bold "  >

          Risks associated with the use of T-DXd combined with other cancer treatments
        </div>
        <p className="pageText" style={{marginBottom: 2rem}}>
          There could be potential for overlapping side effects when T-DXd is used in combination
          with the other cancer treatments in this study. This means it is possible that the combination
          of drugs in each module may cause some side effects that are more severe or take longer
          to resolve than when the medications are given on their own. It is also possible that
          unexpected toxicities (side effects) may occur that do not happen when either medication
          is given on its own. You will be closely monitored for any side effects. <br /><br />
          The following possible risks are associated with the use of the drugs administered
          in combination with T-DXd.
        </p>
        <span className="pageText" style={{color:#596B75, fontWeight:bold}}>
          MODULE 1 & 4
        </span>
        <div class="mb-6 font-serif text-md font-bold "  id="Module 1 &  4" style={{display: flex, alignItems: center, marginBottom:2rem}}>
          Possible risks associated with durvalumab 
        </div>

        <TabPanel value={value} index={0}>
           Common
          <hr class="solid"  style="margin-bottom: 1rem; margin-top: 1rem;">
                <div style="display:flex; align-items:flex-start;">
                    <div>
                        <li>fatigue / tiredness</li>
                        <li>diarrhea</li>
                        <li>rash/dry itchy skin</li>
                        <li>liver problems</li>
                        <li>nausea, vomitting and abdominal pain</li>
                    </div>
                    <div>
                        <li>accumulation of fluid causing swelling in the legs</li>
                        <li>upper respiratory tract infections</li>
                        <li>decreased appetite</li>
                    </div>
                    <div>
                        <li>shortness of breath</li>
                        <li>cough</li>
                        <li>pain in muscles and joints</li>
                        <li>fever</li>
                    </div>
                </div>
            </TabPanel>

        <hr class="solid"  style="margin-bottom: 5rem; margin-top: 2rem;">

        <p className="pageText" style={{marginBottom: 2rem}}>
          The study drug durvalumab works by increasing the immune system’s ability to recognize
          the cancer. This may cause side effects, which can occur when the drug is given or after
          the drug is given (within hours, days or weeks after).
        </p>

        <p className="pageText" style={{marginBottom: 2rem}}>
          <span style="font-weight: 800;"> Most of the possible side effects listed above are mild to moderate.</span> However, some side
          effects can be very serious and life-threatening and may even result in death. Some side
          effects do not need treatment while others generally get better with treatment. You may
          need to delay doses of durvalumab to allow the side effects to get better. Management of
          these side effects may also require the administration of drugs such as steroids or other
          agents that can affect your immune system and reduce inflammation.
        </p>

        <p className="pageText" style={{marginBottom: 2rem}}>
          In addition to the possible risks identified in patients treated with durvalumab, other
          immune-mediated side effects are possible that have not been observed, and can result in
          inflammatory side effects in any organ or tissue.
        </p>

        <span className="pageText" style={{color:#596B75, fontWeight:bold}}>
          MODULE 2
        </span>
        <div class="mb-6 font-serif text-md font-bold "  id="Module 2" style={{display: flex, alignItems: center, marginBottom:2rem}}>
          Possible risks associated with pertuzumab
        </div>

        <TabPanel value={value} index={0}>
           Very common
          <hr class="solid"  style="margin-bottom: 1rem; margin-top: 1rem;">
          May affect more than 1 in 10 people.                
                <div style="display:flex; align-items:flex-start;">    
                    <div>
                        <li>diarrhea</li>
                        <li>hair loss</li>
                        <li>feeling sick or being tired</li>
                        <li>rash</li>
                        <li>inflammation of your digestive tract (e.g. sore mouth)</li>
                        <li>decrease in the number of red blood cells </li>
                        <li>shown in a blood test, decrease in the number of white blood cells</li>
                        <li>joint or muscle pain/weakness</li>
                        <li>constipation</li>
                        <li>reduced appetite</li>
                        <li>loss of altered taste</li>
                        <li>fever</li>
                        <li>swollen ankles or other body parts due to your body retaining too much water</li>
                        <li>not being able to sleep</li>
                    </div>
                    <div>
                        <li>hot flushes</li>
                        <li>weak, numb, tingling or prickling sensations mainly affecting the feet and legs</li>
                        <li> nose bleeds</li>
                        <li>cough</li>
                        <li>heartburn</li>
                        <li>dry, itchy or acne like skin</li>
                        <li>nail problems</li>
                        <li>sore throat, red, sore or runny nose, flu-like symptoms and fever</li>
                        <li>producing more tears</li>
                        <li>fever associated with dangerously low levels of a type of white blood (neutrophils)</li>
                        <li>pain in the body, arms, legs and belly</li>
                        <li>shortness of breath</li>
                        <li>feeling dizzy</li>

                    </div>
                    <div>
                        <li>difficulty breathing (dyspnea)</li>
                        <li>severe nose bleeds (epistaxis)</li>
                        <li style={{fontWeight:'bold', color:'#008764'}}>lung problems (interstitial lung disease/pneumonitis)</li>
                        <li>low potassium in the blood (hypokalemia)</li>
                        <li>rash</li>
                        <li>general body weakness (malaise) </li>
                        <li>decrease in the number of lymphocytes (lymphopenia)</li>
                        <li>fever (pyrexia)</li>
                        <li>swelling of lower legs or hands (edema peripheral)</li>
                    </div>
                </div>
            </TabPanel>

        <hr class="solid"  style="margin-bottom: 5rem; margin-top: 2rem;">

        <span className="pageText" style={{color:#596B75, fontWeight:bold}}>
          MODULE 3 & 4
        </span>
        <div class="mb-14 font-serif text-md font-bold "  id="Module 3 & 4" style={{display: flex, alignItems: center, marginBottom:2rem}}>
          Possible risks associated with paclitaxel
        </div>

        <TabPanel value={value} index={0}>
           Very common
          <hr class="solid"  style="margin-bottom: 1rem; margin-top: 1rem;">
          May affect more than 1 in 10 people.                
                <div style="display:flex; align-items:flex-start;">    
                    <div>
                        <li>
                          <span style="font-weight:800">joint or muscle weakness, pain, aching or loss of sensation in the
                          limbs — </span>These usually reduce or disappear several months after
                          stopping treatment
                        </li>
                        <li>
                          <span style="font-weight:800">infection — </span>usually of the urinary tract or upper respiratory tract. This
                          may be associated with low blood cell count. This can sometimes be
                          fatal
                        </li>
                        <li>
                          <span style="font-weight:800">bone marrow suppression,</span> which can lead to decreased blood cell
                          counts and may result in infections, anaemia with paleness and
                          weakness, and bruising and bleeding
                        </li>
                        <li>
                          <span style="font-weight:800">low blood pressure</span> which may cause you to feel light-headed,
                          particularly when standing up
                        </li>
                        <li>
                          <span style="font-weight:800">pain in the muscle or joints</span>
                        </li>

                    </div>
                    <div>
                      <li>
                        <span style="font-weight:800">loss of hair </span>(the majority of cases of hair loss happened less than
                        one month after starting paclitaxel. When it happens, hair loss is
                        pronounced (over 50%) in the majority of patients)
                      </li>
                      <li>
                        <span style="font-weight:800">nausea and vomiting</span>
                      </li>
                      <li>
                          <span style="font-weight:800">mild diarrhea</span>
                      </li>
                      <li>
                          <span style="font-weight:800">soreness of the mouth or tongue</span>
                      </li>
                      <li>
                           <span style="font-weight:800">mild allergic reactions</span> including flushing and skin rash
                      </li>
                      <li>
                        <span style="font-weight:800">nerve problems —</span> these may appear as pins and needles in the
                        hands and feet (can persist beyond 6 months of paclitaxel
                        discontinuation)
                      </li>
                    </div>

                </div>
            </TabPanel>

        <hr class="solid"  style="margin-bottom: 1rem; margin-top: 2rem;">

        <p className="pageText" style={{marginBottom: 4rem}}>
          Like many other anti-cancer medicines, paclitaxel may cause sterility, which could be
          permanent. Paclitaxel may cause inflammation of the lungs when used in combination with,
          or after, radiotherapy.
        </p>

        <div class="mb-4 mt-10 font-serif text-md font-bold "  id="Risks of Procedures" style="display: flex; align-items: center; margin-bottom:2rem">
          Risk associated with study procedures
        </div>

        <p className="pageText" style="margin-bottom: 3rem;">
          There are also risks associated with some of the study procedures. The most common risks include pain or discomfort, allergic reaction, and infection. They are typically mild to moderate but could be serious or life-threatening. 
        </p>

        <img src={Frame} style={{marginBottom:3rem}}/>

        <div class="mb-14 font-serif text-md font-bold "  id="Other Considerations" style={{display: flex, alignItems: center, marginBottom:2rem}}>
          Are there any other considerations or risks I need to know about?
        </div>

        <p className="pageText" >
          <div style="display:flex; align-content:center; margin-bottom:10px; align-items: center;">
            <img src={Pregnant} style="margin-right: 10px" /><b>Pregnancy, contraception and breast-feeding</b> <br/>
          </div>
          Because the effects of the study treatments on an unborn child or infant are not known, you
          (or your female partner if you are a man) must not get pregnant or breastfeed a child during
          the study. You must use effective birth control during the study and up to 7 months (if you
          are a woman) and 4 months (if you are a man) after the last dose of study treatment
          administration. You must not donate, or retrieve for your own use, ova from the time of
          screening and throughout the study treatment period, and for at least 7 months after the
          final study treatment administration. The study doctor can discuss acceptable birth control
          methods with you.
          If you or your partner become(s) pregnant, you must tell the study doctor immediately. You
          will have to stop taking the study treatment immediately and you and your partner will be
          asked under a separate consent to provide information about you and your baby.
        </p>

        <p className="pageText" >
          <div style="display:flex; align-content:center; margin-bottom:10px;align-items: center;">
            <img src={Medicine} style="margin-right: 10px" /><b>Other medications/ vaccinations</b> <br/>
          </div>
           Because the effects of the study treatments on an unborn child or infant are not known, you
          (or your female partner if you are a man) must not get pregnant or breastfeed a child during
          the study. You must use effective birth control during the study and up to 7 months (if you
          are a woman) and 4 months (if you are a man) after the last dose of study treatment
          administration. You must not donate, or retrieve for your own use, ova from the time of
          screening and throughout the study treatment period, and for at least 7 months after the
          final study treatment administration. The study doctor can discuss acceptable birth control
          methods with you.
          If you or your partner become(s) pregnant, you must tell the study doctor immediately. You
          will have to stop taking the study treatment immediately and you and your partner will be
          asked under a separate consent to provide information about you and your baby.
        </p>
      `
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setLanguage('en');
      setPurposeContent(purposeContentSection);
    }

    if (targetLanguage) {
      setLanguage(targetLanguage);
      setPurposeContent(translateSection('en', targetLanguage))
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
        //   text: {purposeContentSection},
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
    <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: purposeContent} } />
  )
}

