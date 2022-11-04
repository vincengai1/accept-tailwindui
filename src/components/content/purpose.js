import React, {useEffect, useState} from 'react'

import { useRouter } from 'next/router';

import audioCallout from '../../images/audioCallout.png';

export default function Purpose() {
  let [purposeContent, setPurposeContent] = useState("");
  let [language, setLanguage] = useState("");
  let router = useRouter();

  const purposeContentSection =
        `        
        <div class="mb-14 font-serif text-md font-bold "  id="What is this study about?">
          What is this study about?
        </div>

        <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
          <div container spacing={2} class="flex flex-row">
            <div  class="basis-1/2">
                <img src="https://brandmark.io/intro/info.png" class="h-80px mr-20" />
            </div>

            <div >
              <p className="boxText">
                We are doing this study to learn more about whether the medication called <b>trastuzumab deruxtecan, or T-DXd,</b> given alone or in combination with other cancer treatments (durvalumab, pertuzumab, paclitaxel, and paclitaxel+durvalumab) will be safe and effective for the treatment of HER2-positive MBC. We hope that the results of this study will also help to better understand HER2-positive MBC and associated health problems.
                <br/><br/>There is <b>no placebo group</b> in this study. Every participant will receive treatment.
              </p>
            </div>

          </div>
        </div>

        <div class="font-serif text-md font-bold"  id="Description of Study">
            Description of the research study     
        </div>

        <p class="text-sm font-san">
          T-DXd, is a type of anti-cancer drug that attaches to specific proteins known as HER2 on the surface of cancer cells. When this happens, the DXd molecule separates and is
          released into the cancer cell, damaging or killing it. 
        </p>

        <img src={Group151} style={{marginBottom:'2rem', width:'100%'}}/>


        <p className="pageText">
          <span style={{backgroundColor:'#ffff99'}}>While T-DXd has shown promising
          results in patients who have received two or more prior therapies for their cancer, there is much interest in exploring its effectiveness when alone and combined with other treatment regimens that have the potential to further slow-down cancer cell activity.</span> If you are enrolled and pass the initial screening parameters in this study, you will be randomly assigned to one treatment module to evaluate any side effects and see how well
          the study treatments work. Table 1 lists the treatment regimens for each module.
        </p>
        

        <p class="mb-2">
          <b>Table 1 - Treatments regimens </b> <br/>
          Participants will be randomly asssigned to one module. 
        </p>

        <table class="mt-1">
          <tr>
            <th class="bg-darkGray-100 text-white pl-4">Module</th>
            <th class="bg-darkGray-100 text-white pl-4">Study Treatment</th>
          </tr>
          <tr>
            <td class="bg-lightGray-100 pl-4 font-bold">0</td>
            <td class="pl-4">T-DXd alone</td>
          </tr>
          <tr>
            <td class="bg-lightGray-100 pl-4 font-bold">1</td>
            <td class="pl-4">T-DXd + durvalumab</td>
          </tr>
          <tr>
            <td class="bg-lightGray-100 pl-4 font-bold">2</td>
            <td class="pl-4">T-DXd + pertuzumab</td>
          </tr>
          <tr>
            <td class="bg-lightGray-100 pl-4 font-bold">3</td>
            <td class="pl-4">T-DXd + paclitaxel</td>
          </tr>
          <tr>
            <td class="bg-lightGray-100 pl-4 font-bold">4</td>
            <td class="pl-4">T-DXd + durvalumab + paclitaxel</td>
          </tr>
        </table>

          <p class="text-sm font-san">
            AstraZeneca (AZ) is the study sponsor who has engaged with your doctor and hospital to
            conduct this research. AZ and Daiichi Sankyo have entered into a joint collaboration for
            the development of T-DXd. T-DXd has been approved for the treatment of unresectable HER2-positive MBC in adults who have received at least two prior lines of therapy in the United States. However, the use of T-DXd alone, in first line treatments (no prior therapy for metastatic disease) or in combination with other cancer treatments is experimental, which means that they have not been fully tested and are not approved in any country,
            except for the use in research studies like this. <br/><br/>
            The study is planned to go on for approximately 3 years and will include about 350 patients
            with HER2-positive MBC enrolled globally at approximately 100 sites in 15 countries.
        </p>

        <div class="font-serif text-md font-bold mt-14"  id="Review of Trial">
            Review of this trial 
        </div>

        <p class="text-sm font-san">
          The overall description of this study (including the collection, storage and use of your data
          and samples of your biological material, known as biosamples) as well as this document
          has been reviewed in your country by an <span style="color: #008764"> Independent Ethics Committee (IEC) or Institutional Review Board (IRB)</span> to ensure that the rights, safety and well-being of study
          patients are protected.

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
        // method: 'POST,
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

    // Then you'd return dangerouslySetInnerHTML={{__html: {purposeContent}}}
  }

  return (
    <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: purposeContent} } />
  )
}

