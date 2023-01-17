export const logisticsContentSection =
        `
  <div>
    <div class="mb-14 text-md font-bold " id="What will happen?">
      What will happen if I join the study?
    </div>

    <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
      <div class="flex flex-row">
        <div style="margin-right:30px;">
          <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Schedule.png" alt="Schedule" class="h-80px mr-20" />
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

<div class="mb-14 text-md font-bold " id="Screening" style="margin-bottom:1rem">
  Screening (0-28 days prior to starting the study treatment)
</div>

<img    width={500} height={500} unoptimized  src="http://localhost:8080/img/graphic.png" alt="graphic" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />

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


<div class="mb-14 text-md font-bold " id="Treatment Period" style="margin-bottom:1rem">
  Treatment period
</div>

<img    width={500} height={500} unoptimized  src="http://localhost:8080/img/graphic2.png" alt="graphic2" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />


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

<div class="mb-14 text-md font-bold " style="margin-bottom:1rem">
  Follow-up
</div>

<img    width={500} height={500} unoptimized  src="http://localhost:8080/img/graphic3.png" alt="graphic3" style="width: 100%; margin-bottom: 1rem; cursor: pointer;" />

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
  expected, for example for scientific or safety reasons (<span style="color: #DA5697;">see “Section 9” for more
    details</span>).
</p>

<div class="mb-14 text-md font-bold " style="margin-top: 3rem; margin-bottom:1rem">
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

<div class="mb-14 text-md font-bold " style="margin-bottom:2rem; margin-top:3rem;">
  What are the required tests and procedures?
</div>


<div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-7">
  <div class="flex flex-row">
    <div class="basis-1/5">
      <img width={500} height={500} unoptimized  src="http://localhost:8080/img/requiredProcedures.png" alt="requiredprocedures" class="h-80px mr-20" style="padding-right: 10px;"/>
    </div>


    <div>
      <div>
        <div>
          <p class="text-sm font-san">
            On-site, you will regularly experience wellness checks, laboratory work, tumour and biomarker assessments,
            and your study treatment. At home, you’ll take
            daily <span style="color:#DA5697;"> Pulse Oximetry readings.</span> <br /><br />
            These procedures will be minimally invasive. The most invasive/uncomfortable procedures will be<span
              style="color:#DA5697;"> tumour tissue collection and Magnetic
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

<div class=" text-md font-bold " style=" margin-top:3rem;">
  What you’ll experience regularly on-site
</div>

<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Wellness.png" alt="Wellness" style="margin-right:10px;" />
  <p className="pageText">
    <b>Wellness checks</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  The clinical team will regularly conduct non-invasive wellness checks, including:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px; display: flex; flex-direction: column; justify-content: space-between;">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Full physical examination
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A check on your general health, status of your disease, measuring your weight and height.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Performance status
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A check on your general health, status of your disease, measuring your weight and height.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Electrocardiogram (ECG), Echocardiogram (ECHO) or Multigated Acquisition (MUGA) Scans
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      ECG: An electrical recording of how your heart works. ECHO/MUGA: Noninvasive tests to check the pumping function
      of your heart.
    </p>
  </div>

  <div className="column2" style="padding:10px">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Pulse Oximetry (SpO2)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A test to show how your lungs are working, measurement of the amount of air you breathe in and out.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Adverse Event / Serious Adverse Event assessment
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Any event that occurs during study participation that is unfavourable and may cause pain or discomfort must be
      reported to your doctor at each study visit.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Health-related questionnaires
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      You will be asked to complete questionnaires related to your symptoms and well-being. Questionnaires will be
      completed at home using a mobile app.
    </p>
  </div>
</div>

<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Lab.png" alt="lab" style="margin-right:10px;" />
  <p className="pageText">
    <b>Laboratory assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  These procedures are minimally invasive, and include:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Blood Collection
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      No greater than a total of 715 mL of blood will be taken during your participation in the study and no greater
      than 120 mL of blood will be taken per visit.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Urine collection
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A measurement of kidney function and electrolytes.
    </p>
  </div>

  <div className="column2" style="padding:10px">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Eye exam
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px">
      Your eyes will be checked for any signs of disease and reading ability
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Serum pregnancy test
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px">
      All women who are able to have children will have a pregnancy test (blood work) done. You cannot take part in this
      study if you are pregnant.
    </p>
  </div>
</div>


<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/XRay.png" alt="xray" style="margin-right:10px;" />
  <p className="pageText">
    <b>Tumour and biomarker assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  These procedures are to review your cancer progression, and could be more uncomfortable:
</p>

<div style="display:grid; grid-template-columns: 50% 50%">
  <div className="column1" style="padding:10px;">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Magnetic Resonance Imaging (MRI)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Uses magnetic fields to produce detailed images to measure and record the size of your tumour(s).
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Computed Tomography (CT)
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      Uses X-Rays and a computer to create detailed images of your body. A high-resolution CT (HRCT) of the chest will
      be performed at screening and treatment if interstitial lung disease (ILD) or pneumonitis is suspected.
    </p>
  </div>

  <div className="column2" style="padding:10px;">
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Whole body bone scan
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A test to see if there are any signs of cancer that has spread to any bones in your body.
    </p>
    <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
      Tumor tissue sample
    </p>
    <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
      A fresh or archival sample taken for disease subtyping and testing markers of treatment response.
    </p>
  </div>
</div>

<div style="display: flex; flex-direction: column">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Group 204.png" alt="group204"/>
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Group205.png" alt="group205" />
</div>

<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/IV.png" style="margin-right:10px;" alt="iv"/>
  <p className="pageText">
    <b>Tumour and biomarker assessments</b>
  </p>
</div>

<p className="pageText" style="margin:0px; margin-bottom:2rem">
  Based on the module you are randomly assigned to. You will receive treatment intravenously every 1–3 weeks during the
  treatment period.
</p>

<div class="mb-14 text-md font-bold " style="margin-bottom: 1rem; font-size:20px !important;">
  What you’ll experience occasionally on-site
</div>

<p className="pageText" style="margin:0px">
  At your screening appointment only, the clinical team will conduct a <span style="color:#DA5697"> Spirometry
    (DLCO) </span>test to check your lung function.
</p>

<div class="mb-14 text-md font-bold " id="At Home"
  style="margin-bottom:1rem; margin-top: 2rem; font-size:20px !important; align-ttems:center">
  What you'll do at home
</div>

<div style="display:grid; grid-template-columns: 35% 65%; margin-top:2rem">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Index 1.png" alt="index1"/>

  <div>
    <p className="pageText" style="font-weight:700; color:#DA5697">
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
      <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/info.png" alt="info" style="height:40px; padding-left: 20px;" />
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

<div class="mb-14 text-md font-bold " style="margin-bottom: 1rem; font-size: 20px !important; margin-top:2rem">
  What are the optional tests and procedures?
</div>

<div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
  <div class="flex flex-row">
    <div style="flex-basis:30%; margin-right: 30px;">
      <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/optionalprocedures.png" alt="optinalprocedure" style="height:80px" />
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
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Syringe.png" alt="syringe" style="margin-right:10px;" />
  <p className="pageText">
    <b>Optional tumour tissue</b>
  </p>
</div>

<p className="pageText" style="margin:0px">
  There are 3 types of additional biopsies you can agree to:
</p>

<div className="column1" style="padding:10px;">
  <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Baseline Biopsy
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken at the start of the study before beginning treatment. Could be mandatory for some patients.
  </p>
  <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Paired Biopsy
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken during treatment. Could be mandatory for some patients.
  </p>
  <p className="pageText" style="color:#DA5697; font-size: 16px; font-weight:700; margin-bottom:0px;">
    Biopsy on progression
  </p>
  <p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
    Sample taken at disease progression.
  </p>
</div>

<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/ExtraSamples.png" alt="extrasampels" style="margin-right:10px;" />
  <p className="pageText">
    <b>Optional unused samples</b>
  </p>
</div>
<p className="pageText" style="font-size: 14px; margin-left:10px; margin-top: 0px;">
  You can agree to allow further research testing on unused parts of samples you donate.
</p>

<div style="display: flex; align-items: center;">
  <img    width={500} height={500} unoptimized  src="http://localhost:8080/img/Lab.png" alt="lab2" style="margin-right:10px;" />
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


export const logisticsAudioSection = `
What will happen if I join the study?
Length of study is 3 years.

Treatment period lasts for XXXX amount of time and will involve on-site visits in Nashville, TN once every 1–3 weeks.

Follow-up period will involve on-site visits roughly once every 3 months.
Screening (0-28 days prior to starting the study treatment)

You may be in the study for approximately 36 months, and may continue depending on the module you have been assigned to. Before you can start the study you will undergo a series of tests. This is called screening. If you meet all of the criteria to enter the study, you will be assigned to one of the modules. The study modules will have 2 parts: Part 1 will consist of tests that will help to determine the best dose that will work for you and the other participants and will apply to treatment modules 1 – 4 and Part 2 will provide more information on the safety and effectiveness of the study treatment applicable for treatment modules 0 - 4. In Part 1, you will be assigned to a module by the sponsor, and in Part 2, you will be randomly assigned. Being ‘randomly assigned’ means that whatever treatment you get will be by chance, like flipping a coin or drawing names out of a hat. You will be assigned to either Part 1 or Part 2 of the study, not both. You will not be able to choose which treatment you will get, but your doctor will tell you which study treatment you are assigned to. If you do not meet the study’s entry criteria, the reasons will be explained. Your study doctor will talk to you about other possible treatment options.

Treatment period
During the treatment period of the study, you will be administered the study treatment on the first day of a given cycle, which lasts about 21 days or every 3 weeks. The dosing schedule will depend on the module that you are assigned to. A summary of the study treatments and their dosing schedules can be found in Table 2.

Table 2 - Summary of study treatments Participants will be randomly assigned to one module.

Module 0
Study Treatment: T-DXd alone
Route: Intravenous infusion
Schedule: Once every three weeks

Module 1	
Study Treatment: T-DXd + durvalumab
Route: Intravenous infusion
Schedule: Once every three weeks

Module 2	Study Treatment: T-DXd + pertuzumab
Route: Intravenous infusion
Schedule: Once every three weeks

Module 3	Study Treatment: T-DXd + paclitaxel
Route: Intravenous infusion
Schedule: T-DXd once every three weeks Paclitaxel once weekly

Module 4	Study Treatment: T-DXd + durvalumab + paclitaxel
Route: Intravenous infusion
Schedule: T-DXd + Durvalumab once every three weeks Paclitaxel once weekly

Follow-up
The follow-up period in modules 0, 2 and 3 occurs 40-47 days after the last dose of the study treatment (safety follow-up) and every 3 months (± 14 days) thereafter, until the end of the study period (long-term survival follow-up). For modules 1 and 4 that involve durvalumab, the safety follow-up period occurs at multiple timepoints: 30, 60 and 90 days after the last treatment dose. During this follow-up period you will stop taking your study treatment. You will be expected to attend all regular treatment and follow-up visits as a participant in this study. If you cannot come to a visit, you must tell your study doctor. You will only be given the study treatments while the study is going on but not after it has ended. Please note that the study, and your participation in the study, may be stopped earlier than expected, for example for scientific or safety reasons (see “Section 9” for more details).

Significant regional disruptions, evolving global pandemics or similar natural disasters
If you cannot attend the visits at the study site due to a civil crisis, natural disaster or public health crisis, the sponsor may need to take alternative measures in the study conduct to ensure that you remain able to receive study medication, whilst ensuring your safety. If needed, the sponsor will provide separate guidance addressing needed study procedure changes, which will be consistent with local regulations, health authority and other relevant professional body guidance that may be available at that time.

What are the required tests and procedures?
requiredprocedures
On-site, you will regularly experience wellness checks, laboratory work, tumour and biomarker assessments, and your study treatment. At home, you’ll take daily Pulse Oximetry readings.

These procedures will be minimally invasive. The most invasive/uncomfortable procedures will be tumour tissue collection and Magnetic Resonance Imaging (MRI) and Computed Tomography (CT).

What you’ll experience regularly on-site
Wellness checks

The clinical team will regularly conduct non-invasive wellness checks, including:
Full physical examination

A check on your general health, status of your disease, measuring your weight and height.

Performance status

A check on your general health, status of your disease, measuring your weight and height.

Electrocardiogram (ECG), Echocardiogram (ECHO) or Multigated Acquisition (MUGA) Scans

ECG: An electrical recording of how your heart works. ECHO/MUGA: Noninvasive tests to check the pumping function of your heart.

Pulse Oximetry (SpO2)

A test to show how your lungs are working, measurement of the amount of air you breathe in and out.

Adverse Event / Serious Adverse Event assessment

Any event that occurs during study participation that is unfavourable and may cause pain or discomfort must be reported to your doctor at each study visit.

Health-related questionnaires

You will be asked to complete questionnaires related to your symptoms and well-being. Questionnaires will be completed at home using a mobile app.

Laboratory assessments

These procedures are minimally invasive, and include:

Blood Collection

No greater than a total of 715 mL of blood will be taken during your participation in the study and no greater than 120 mL of blood will be taken per visit.

Urine collection

A measurement of kidney function and electrolytes.

Eye exam

Your eyes will be checked for any signs of disease and reading ability

Serum pregnancy test

All women who are able to have children will have a pregnancy test (blood work) done. You cannot take part in this study if you are pregnant.

Tumour and biomarker assessments

These procedures are to review your cancer progression, and could be more uncomfortable:

Magnetic Resonance Imaging (MRI)

Uses magnetic fields to produce detailed images to measure and record the size of your tumour(s).

Computed Tomography (CT)

Uses X-Rays and a computer to create detailed images of your body. A high-resolution CT (HRCT) of the chest will be performed at screening and treatment if interstitial lung disease (ILD) or pneumonitis is suspected.

Whole body bone scan

A test to see if there are any signs of cancer that has spread to any bones in your body.

Tumor tissue sample

A fresh or archival sample taken for disease subtyping and testing markers of treatment response.
Tumour and biomarker assessments

Based on the module you are randomly assigned to. You will receive treatment intravenously every 1–3 weeks during the treatment period.

What you’ll experience occasionally on-site
At your screening appointment only, the clinical team will conduct a Spirometry (DLCO) test to check your lung function.

What you'll do at home

At-Home Pulse Oximetry (SpO2)

You will be asked to take daily Pulse Oximetry readings at home. The Pulse Oximetry reading measures the oxygen level of the blood and will help researchers understand how the study medication may impact your blood oxygen level. The reading is easy and painless and will be taken using a device that will be provided to you.

For a detailed schedule and complete list of tests/procedures, see Table 3 — Summary of required tests and procedures.
What are the optional tests and procedures?
You have the option to consent to the collection of extra tissue samples through tumour biopsies. The advantage is ___________. Your experience will be affect in the following way: ____________.

These procedures will be moderately invasive.
Tumour biopsies for biomarker analysis may be collected during the study for optional tests.

Optional tumour tissue

There are 3 types of additional biopsies you can agree to:

Baseline Biopsy

Sample taken at the start of the study before beginning treatment. Could be mandatory for some patients.

Paired Biopsy

Sample taken during treatment. Could be mandatory for some patients.

Biopsy on progression

Sample taken at disease progression.
Optional unused samples

You can agree to allow further research testing on unused parts of samples you donate.
Optional blood samples

You can also agree to additional blood draws for genetic testing.

You can still take part in this research study, even if you do not agree to donate the extra sample(s). If you decide to stop taking part in the study, please tell the Study Doctor if you want to change your mind about using extra sample(s) for further research.

Do you consent to the collection of extra tissue samples through tumour biopsies?
This is optional, and you can review your answers before you submit. You can also skip this question for now.

I consent to an optional biopsy during the study treatment.

Yes No
I consent to an optional biopsy at disease progression (if my disease gets worse).

Yes No
`