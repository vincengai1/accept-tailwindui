import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';


export default function LearnMore({data}) {
  let [introContent, setIntroContent] = useState("");
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

  const introductionContentSection =
        `       
        <div class="font-serif text-md font-bold" style="margin-bottom:2rem;" >
          How to find out more after the study?
        </div>
        <div class=" bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-8">
          <div  class="flex flex-row">
            <div  class="basis-1/2">
                <img alt="urls" src="http://localhost:8080/img/URLs.png" style="height:90px; margin-top: 1rem" />
            </div>

            <div>
              <div>
                <div>
                  <p className="boxText">
                   <span style="color: #008764;">Trial Result Summaries</span> are a short and easy to understand summary of the results of
                      this study. These will be added to <span style="color: #008764;">trialsummaries.com</span> 1 year from the last study
                      participants last site visit. 
                </div>
              </div>
            </div>
          </div>
        </div>

          <p class="text-sm">
            You can visit trialsummaries.com website anytime to sign
            up to be notified via email when the trial results summary of your study is available. Or,
            please let your study doctor know if you need a printed copy of the document. Technical
            Information about this research study will be posted on astrazenecaclinicaltrials.com,
            clinicaltrials.gov, and clinicaltrialsregister.eu. These websites do
            not contain any information about you.
          </p>

          
          <div class="font-serif text-md font-bold" style="margin-top:3rem;" >
            How to find results from future research?
        </div>

          <p class="text-sm ">
            We may have to collect study coded data and biosamples from many people over many
            years before we can know if the results of future research are meaningful. <br/> <br/>

            Therefore, you should not expect to receive individual results from future research projects.
            We will not give any such data to your doctor and we will not put them in your medical
            record as they are not individual valid results. <br/> <br/>
            <b>
            You are free to consent to the use of your coded data and biosamples for FUTURE
            RESEARCH. If you agree, you can indicate this in the CONSENT FORM.</b>
          </p>

          <div class="font-serif text-md font-bold" style="margin-bottom:2rem; margin-top:3rem;" >
            Who can answer any questions I may have? 
          </div>

        <div class=" bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
          <div  class="flex flex-row" style="padding-left:2rem;">
            <div  class="basis-1/2">
                <img alt="contact" src="http://localhost:8080/img/Contact.png" style="height:80px;" />

            </div>

            <div>
              <div>
                <div>
                    <b>Study Contact</b> <br/>
                    John Smith, Trial Coordinator <br/>
                    111-11-1111 <br/>
                    drsmith@astrazeneca.com
                </div>
              </div>
            </div>
          </div>
        </div>

          <p class="text-sm">
           <b>Feel free to ask any questions at any time.</b> It is your right to
            be fully informed before deciding to take part in this study and any time during the study
            period as well as in the future research. You can contact the study
            doctor at any time.
          </p>
        `
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setIntroContent(introductionContentSection);
    }

    if (targetLanguage) {
      translateSection('en', targetLanguage)
      translateHeader('en', targetLanguage)

    }
  }, [])
  
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
  async function translateSection(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;

  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept" : "text/plain"
    },
      method: 'POST',
      mode: 'cors',
      body: introductionContentSection
  });
      // const res = await response;
      const res = await response;
      res.text().then(body => setIntroContent(body))  
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

      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: introContent} } />

      <Footer prev={"/8"} next={"/10"} />

    </div>
  )
}

