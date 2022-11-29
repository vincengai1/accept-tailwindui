import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';
import LogisticsSigning from './logisticsSigning';

import {useSelector} from 'react-redux';

export default function Logistics({data}) {
  let [logisticsContent, setLogisticsContent] = useState("");
  let [title, setTitle] = useState(data.title);
  let [description, setDescription] = useState(data.description);

  
  let router = useRouter();
  let lango = router.asPath.slice(12);
  let audioPlayerData = useMemo(
    () => ({
      title: data.title,
      audio: {
        src: data.audio.src,
        type: data.audio.type,
      },
      link: `/${data.id}`,
    }),
    [data]
  )

  let player = useAudioPlayer(audioPlayerData)

  const logisticsContentSection =
        `
  <div>
    <div class="mb-14 font-serif text-md font-bold " id="What will happen?">
      What will happen if I join the study?
    </div>

    <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
      <div class="flex flex-row">
        <div style="margin-right:30px;">
          <img src="http://localhost:8080/img/Schedule.png" alt="Schedule" class="h-80px mr-20" />
        </div>

        <div>
          <div item xs>
            <p className="boxText">
              Length of study is <b>3 years.</b> <br /><br />
              Treatment period lasts for <b>XXXX amount of time</b> and will involve on-site visits in Nashville, TN once
              every 1–3 weeks.<br /><br />
              Follow-up period will involve on-site visits roughly <b>once every 3 months.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="mb-14 font-serif text-md font-bold " id="Screening" style="margin-bottom:1rem">
  Screening (0-28 days prior to starting the study treatment)
</div>

<img src="http://localhost:8080/img/graphic.png" alt="graphic" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />

<p className="pageText" style="margin-bottom: 3rem;">
  You may be in the study for approximately 36 months, and may continue depending on the
  module you have been assigned to. Before you can start the study you will undergo a
  series of tests. This is called screening. If you meet all of the criteria to enter the study, you
  will be assigned to one of the modules. The study modules will have 2 parts: Part 1 will
  consist of tests that will help to determine the best dose that will work for you and the other
  participants and will apply to treatment modules 1 – 4 and Part 2 will provide more
  information on the safety and effectiveness of the study treatment applicable for treatment
  modules 0 - 4. In Part 1, you will be assigned to a module by the sponsor, and in Part 2,
  you will be randomly assigned. Being ‘randomly assigned’ means that whatever treatment
  you get will be by chance, like flipping a coin or drawing names out of a hat. You will be
  assigned to either Part 1 or Part 2 of the study, not both. You will not be able to choose
  which treatment you will get, but your doctor will tell you which study treatment you are
  assigned to. If you do not meet the study’s entry criteria, the reasons will be explained.
  Your study doctor will talk to you about other possible treatment options.
</p>


<div class="mb-14 font-serif text-md font-bold " id="Treatment Period" style="margin-bottom:1rem">
  Treatment period
</div>

<img src="http://localhost:8080/img/graphic2.png" alt="graphic2" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />


<p className="pageText">
  During the treatment period of the study, you will be administered the study treatment on
  the first day of a given cycle, which lasts about 21 days or every 3 weeks. The dosing
  schedule will depend on the module that you are assigned to. A summary of the study
  treatments and their dosing schedules can be found in Table 2.
</p>

<p className="pageText">
  <b> Table 2 - Summary of study treatments </b>
  Participants will be randomly assigned to one module.
</p>

<table style="border-right: 1px solid #c7c7c7" style="margin-bottom: 3rem;">
  <tr style="border-top: 1px solid #c7c7c7">
    <td style="padding-left: 10px; background-color: #244150; color:white; font-family: 'Noto Sans', sans-serif; font-weight: 800; ">
      <span>Module 0</span> <br />
      <span style="font-weight: 400">Only for Part 2</span>
    </td>
    <td>
      <span><b>Study Treatment:</b> T-DXd alone
        <br /></span>
      <span><b>Route:</b> Intravenous infusion<br /></span>
      <span><b>Schedule:</b> Once every three weeks<br /></span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 10px; background-color: #244150; color:white; font-family: 'Noto Sans', sans-serif; font-weight: 800;">
      Module 1
    </td>
    <td>
      <span><b>Study Treatment:</b> T-DXd + durvalumab <br /></span>
      <span><b>Route:</b> Intravenous infusion<br /></span>
      <span><b>Schedule:</b> Once every three weeks<br /></span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 10px; background-color: #244150; color:white; font-family: 'Noto Sans', sans-serif; font-weight: 800;">
      Module 2</td>
    <td>
      <span><b>Study Treatment:</b> T-DXd + pertuzumab<br /></span>
      <span><b>Route:</b> Intravenous infusion<br /></span>
      <span><b>Schedule:</b> Once every three weeks<br /> </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 10px; background-color: #244150; color:white; font-family: 'Noto Sans', sans-serif; font-weight: 800;">
      Module 3</td>
    <td>
      <span><b>Study Treatment:</b> T-DXd + paclitaxel<br /></span>
      <span><b>Route:</b> Intravenous infusion<br /></span>
      <span><b>Schedule:</b> T-DXd once every three weeks Paclitaxel once weekly<br /></span>
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #c7c7c7">
    <td style="padding-left: 10px; background-color: #244150; color:white; font-family: 'Noto Sans', sans-serif; font-weight: 800;">
      Module 4
    </td>
    <td>
      <span><b>Study Treatment:</b> T-DXd + durvalumab + paclitaxel<br /></span>
      <span><b>Route:</b> Intravenous infusion<br /></span>
      <span><b>Schedule:</b> T-DXd + Durvalumab once every three weeks Paclitaxel once weekly<br /></span>
    </td>
  </tr>
</table>

<div class="mb-14 font-serif text-md font-bold " style="margin-bottom:1rem">
  Follow-up
</div>

<img src="http://localhost:8080/img/graphic3.png" alt="graphic3" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />

<p className="pageText">
  The follow-up period in modules 0, 2 and 3 occurs 40-47 days after the last dose of the
  study treatment (safety follow-up) and every 3 months (± 14 days) thereafter, until the end
  of the study period (long-term survival follow-up). For modules 1 and 4 that involve
  durvalumab, the safety follow-up period occurs at multiple timepoints: 30, 60 and 90 days
  after the last treatment dose. During this follow-up period you will stop taking your study
  treatment.
  You will be expected to attend all regular treatment and follow-up visits as a participant in
  this study. If you cannot come to a visit, you must tell your study doctor. You will only be
  given the study treatments while the study is going on but not after it has ended. Please
  note that the study, and your participation in the study, may be stopped earlier than
  expected, for example for scientific or safety reasons (<span style="color: #008764;">see “Section 9” for more
    details</span>).
</p>

<div class="mb-14 font-serif text-md font-bold " style="margin-top: 3rem; margin-bottom:1rem">
  Significant regional disruptions, evolving global pandemics or similar natural disasters
</div>

<p className="pageText">
  If you cannot attend the visits at the study site due to a civil crisis, natural disaster or public
  health crisis, the sponsor may need to take alternative measures in the study conduct to
  ensure that you remain able to receive study medication, whilst ensuring your safety.
  If needed, the sponsor will provide separate guidance addressing needed study procedure
  changes, which will be consistent with local regulations, health authority and other relevant
  professional body guidance that may be available at that time.
</p>

<div class="mb-14 font-serif text-md font-bold " style="margin-bottom:2rem; margin-top:3rem;">
  What are the required tests and procedures?
</div>


<div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-7">
  <div class="flex flex-row">
    <div class="basis-1/5">
      <img src="http://localhost:8080/img/requiredProcedures.png" alt="requiredprocedures" class="h-80px mr-20" style="padding-right: 10px;"/>
    </div>


    <div>
      <div>
        <div>
          <p class="text-sm font-san">
            On-site, you will regularly experience wellness checks, laboratory work, tumour and biomarker assessments,
            and your study treatment. At home, you’ll take
            daily <span style="color:#008764;"> Pulse Oximetry readings.</span> <br /><br />
            These procedures will be minimally invasive. The most invasive/uncomfortable procedures will be<span
              style="color:#008764;"> tumour tissue collection and Magnetic
              Resonance Imaging (MRI) and Computed Tomography (CT). </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<p className="pageText">
  To conduct the study, some tests and procedures will have to be performed on you.
</p>

<div class=" font-serif text-md font-bold " style=" margin-top:3rem;">
  What you’ll experience regularly on-site
</div>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/Wellness.png" alt="Wellness" style="margin-right:10px;" />
  <p className="pageText">
    <b>Wellness checks</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  The clinical team will regularly conduct non-invasive wellness checks, including:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px; display: flex; flex-direction: column; justify-content: space-between;">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Full physical examination
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A check on your general health, status of your disease, measuring your weight and height.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Performance status
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A check on your general health, status of your disease, measuring your weight and height.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Electrocardiogram (ECG), Echocardiogram (ECHO) or Multigated Acquisition (MUGA) Scans
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      ECG: An electrical recording of how your heart works. ECHO/MUGA: Noninvasive tests to check the pumping function
      of your heart.
    </p>
  </div>

  <div className="column2" style="padding:10px">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Pulse Oximetry (SpO2)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A test to show how your lungs are working, measurement of the amount of air you breathe in and out.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Adverse Event / Serious Adverse Event assessment
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Any event that occurs during study participation that is unfavourable and may cause pain or discomfort must be
      reported to your doctor at each study visit.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Health-related questionnaires
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      You will be asked to complete questionnaires related to your symptoms and well-being. Questionnaires will be
      completed at home using a mobile app.
    </p>
  </div>
</div>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/Lab.png" alt="lab" style="margin-right:10px;" />
  <p className="pageText">
    <b>Laboratory assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  These procedures are minimally invasive, and include:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Blood Collection
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      No greater than a total of 715 mL of blood will be taken during your participation in the study and no greater
      than 120 mL of blood will be taken per visit.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Urine collection
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A measurement of kidney function and electrolytes.
    </p>
  </div>

  <div className="column2" style="padding:10px">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Eye exam
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px">
      Your eyes will be checked for any signs of disease and reading ability
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Serum pregnancy test
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px">
      All women who are able to have children will have a pregnancy test (blood work) done. You cannot take part in this
      study if you are pregnant.
    </p>
  </div>
</div>


<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/XRay.png" alt="xray" style="margin-right:10px;" />
  <p className="pageText">
    <b>Tumour and biomarker assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  These procedures are to review your cancer progression, and could be more uncomfortable:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px;">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Magnetic Resonance Imaging (MRI)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Uses magnetic fields to produce detailed images to measure and record the size of your tumour(s).
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Computed Tomography (CT)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Uses X-Rays and a computer to create detailed images of your body. A high-resolution CT (HRCT) of the chest will
      be performed at screening and treatment if interstitial lung disease (ILD) or pneumonitis is suspected.
    </p>
  </div>

  <div className="column2" style="padding:10px;">
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Whole body bone scan
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A test to see if there are any signs of cancer that has spread to any bones in your body.
    </p>
    <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Tumor tissue sample
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A fresh or archival sample taken for disease subtyping and testing markers of treatment response.
    </p>
  </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom:1rem;">
  <img src="http://localhost:8080/img/Group 204.png" alt="group204" />
  <img src="http://localhost:8080/img/Group205.png" alt="group205" />
</div>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/IV.png" style="margin-right:10px;" alt="iv"/>
  <p className="pageText">
    <b>Tumour and biomarker assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px; margin-bottom:2rem">
  Based on the module you are randomly assigned to. You will receive treatment intravenously every 1–3 weeks during the
  treatment period.
</p>

<div class="mb-14 font-serif text-md font-bold " style="margin-bottom: 1rem; font-size:20px !important;">
  What you’ll experience occasionally on-site
</div>

<p className="pageText" style="margin:0px">
  At your screening appointment only, the clinical team will conduct a <span style="color:#00A372"> Spirometry
    (DLCO) </span>test to check your lung function.
</p>

<div class="mb-14 font-serif text-md font-bold " id="At Home"
  style="margin-bottom:1rem; margin-top: 2rem; font-size:20px !important; align-ttems:center">
  What you'll do at home
</div>

<div style="display:grid; grid-template-columns: 35% 65%; margin-top:2rem">
  <img src="http://localhost:8080/img/Index 1.png" alt="index1"/>

  <div>
    <p className="pageText" style="font-weight:700; color:#00A372">
      At-Home Pulse Oximetry (SpO2)
    </p>
    <p className="pageText">
      You will be asked to take daily Pulse Oximetry readings at home. The Pulse Oximetry reading measures the oxygen
      level of the blood and will help researchers understand
      how the study medication may impact your blood oxygen level. The reading is easy and painless and will be taken
      using a device that will be provided to you.
    </p>
  </div>
</div>

<div class="font-san bg-astraGray-100 text-fontGray-100 flex flex-row rounded-xl">
  <div class="flex flex-row">
    <div style="flex-basis:20%">
      <img src="http://localhost:8080/img/info.png" alt="info" style="height:40px; padding-left: 20px;" />
    </div>

    <div>
      <div>
        <div>
          <p className="boxText">
            For a detailed schedule and complete list of tests/procedures, see Table 3 — Summary of required tests and
            procedures.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="solid" style="margin-bottom: 4rem; margin-top: 4rem;">

<div class="mb-14 font-serif text-md font-bold " style="margin-bottom: 1rem; font-size: 20px !important; margin-top:2rem">
  What are the optional tests and procedures?
</div>

<div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
  <div class="flex flex-row">
    <div style="flex-basis:30%; margin-right: 30px;">
      <img src="http://localhost:8080/img/optionalprocedures.png" alt="optinalprocedure" style="height:80px" />
    </div>

    <div item xs="12" sm container>
      <div>
        <div item xs>
          <p className="boxText">
            You have the option to consent to the collection of extra tissue samples through <b>tumour biopsies</b>. The
            advantage is ___________.
            Your experience will be affect in the following way: ____________.
            <br /><br />
            These procedures will be <b> moderately </b>invasive.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<p className="pageText">
  Tumour biopsies for biomarker analysis may be collected during the study for optional tests.
</p>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/Syringe.png" alt="syringe" style="margin-right:10px;" />
  <p className="pageText">
    <b>Optional tumour tissue</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  There are 3 types of additional biopsies you can agree to:
</p>

<div className="column1" style="padding:10px;">
  <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Baseline Biopsy
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken at the start of the study before beginning treatment. Could be mandatory for some patients.
  </p>
  <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Paired Biopsy
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken during treatment. Could be mandatory for some patients.
  </p>
  <p className="pageText" style="color:#008764; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Biopsy on progression
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken at disease progression.
  </p>
</div>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/ExtraSamples.png" alt="extrasampels" style="margin-right:10px;" />
  <p className="pageText">
    <b>Optional unused samples</b>
  </p>
</div>
<p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
  You can agree to allow further research testing on unused parts of samples you donate.
</p>

<div style="display: flex; align-items: center;">
  <img src="http://localhost:8080/img/Lab.png" alt="lab2" style="margin-right:10px;" />
  <p className="pageText">
    <b>Optional blood samples</b>
  </p>
</div>
<p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
  You can also agree to additional blood draws for genetic testing.
</p>

<p className="pageText" style="font-size: 14px; margin-top: 0px">
  You can still take part in this research study, even if you do not agree to donate the extra
  sample(s). If you decide to stop taking part in the study, please tell the Study Doctor if you
  want to change your mind about using extra sample(s) for further research.
</p>

</div>
        `
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setLogisticsContent(logisticsContentSection);
    }

    if (targetLanguage) {
      translateSection('en', targetLanguage);
      translateHeader('en', targetLanguage)

    }

  }, [])
  
  async function translateSection(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;

  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept" : "text/plain"
    },
      method: 'POST',
      mode: 'cors',
      body: logisticsContentSection
  });
      // const res = await response;
      const res = await response;
      res.text().then(body => setLogisticsContent(body))  
  }

  async function translateHeader(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = title + ' **** ' + description;

  console.log(title, description, 'is it good')
  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept" : "text/plain"
    },
      method: 'POST',
      mode: 'cors',
      body: consolidatedData
  });
      // const res = await response;
      const res = await response;
      res.text().then(body => {
        let splitArray =  body.split('****');
        let translatedTitle = splitArray[0];
        let translatedDescription = splitArray[1];

        setTitle(translatedTitle);
        setDescription(translatedDescription);
      }) 
  }

  return (
    <div>
      <Head>
        <title>{`${title} - Their Side`}</title>
        <meta name="description" content={description} />
      </Head>
      <article >
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              <PlayButton player={player} size="large" />
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {title} 
                </h1>
                <div
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                >
                </div>
              </div>
            </div>
            <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
              {description}
            </p>
          </header>
          <hr className="my-12 border-gray-200" />
        
        </Container>
      </article>
      
      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: logisticsContent} } />

      <LogisticsSigning />

      <Footer prev={"/2"} next={"/4"} />
    </div>
  )
}