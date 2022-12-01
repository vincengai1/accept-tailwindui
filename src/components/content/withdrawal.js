import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';

export default function Withdrawal({data}) {
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
        <div class="font-serif text-md font-bold" style="margin-bottom:2rem;">
          What will happen if I want to quit the study?      
        </div>

        <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
          <div class="flex flex-row">
            <div style="flex-basis:40%">
                <img alt="withdraw" src="http://localhost:8080/img/withdraw.png" style="height:90px;" />
            </div>

            <div>
              <div>
                <div>
                  <p className="boxText">
                   <b>You can stop your participation at any time. </b>
                    <br /><br /> There are 2 options: 
                    <br /><br />
                    - <b>Study discontinuation:</b> You stop treatment and data collection, and your previously collected data and biosamples <b>will </b>
                    be kept and used.  <br /><br />
                    - <b>Withdrawal:</b> You stop treatment and data collection, and your previously collected data and biosamples 
                     <b> will not </b> be kept and used. 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
          <p className="pageText" style="margin-bottom: 3rem">
            <b>Your participation in the study is voluntary which means you can stop your participation at
            any time. </b>If you want to stop taking the study treatment, want to have a modified visit
            schedule or if you want to stop your participation, you should tell the study doctor. <br /><br />
            If you stop participating in the study (be aware that this is a “study discontinuation”, and
            not a withdrawal of/ objection to consent for processing personal data), the study doctor
            will stop the collection of your data but your previously collected data and biosamples will
            be kept and used to guarantee the validity of the study and comply with regulatory
            requirements, as allowed by law. The study doctor will then invite you to have an end of
            study examination to check your wellbeing. If you don’t show up at a planned visit, the study doctor will try to reach you. If the study doctor cannot reach you, public sources will
            be consulted to verify your wellbeing. This is important for study results. It is not mandatory
            but would be helpful for the study if you explain to your study doctor why you wish to stop
            your participation, in particular if you have experienced discomforts. <br /><br />
            If you would like your data or biosamples not to be used after you quit the study, you must
            inform the study doctor. In such case, your remaining biosamples will be destroyed as
            soon as possible, but your coded data previously collected will be kept as required by
            clinical regulations.
          </p>

          <div class="font-serif text-md font-bold" style="margin-top: 3rem;" >
           What if I want to withdraw from future research?      
        </div>

        <p className="pageText" style="margin-bottom: 3rem">
          <b>Your participation in future research is voluntary. </b> You are entitled to withdraw your consent
          for future research at any time, without giving a reason and without a negative effect on
          your standard of medical care. If you wish to withdraw, please inform your study doctor.<br /><br />
          You may still continue to participate in the clinical study even if you choose to withdraw
          from future research.<br /><br />
          If you withdraw from future research, your coded data and biosamples will not be used for
          future research and your samples will be destroyed as soon as possible
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
  let consolidatedData = title + ' |||| ' + description;

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
        let splitArray =  body.split(' |||| ');
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

      <Footer prev={"/7"} next={"/9"} />

    </div>
  )
}

