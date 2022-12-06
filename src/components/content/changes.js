import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';



export default function Changes({data}) {
  let [benefitsContent, setBenefitsContent] = useState("");
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


  const benefitsContentSection =
        `        
<div class=" bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
  <div class="flex flex-row">
    <div style="flex-basis: 60%; margin-right:20px;">
      <img alt="changes" src="http://localhost:8080/img/Changes.png" style="height:80px;" />
    </div>

    <div>
      <div>
        <div>
          <p className="boxText">
            The trial team will keep you informed of any changes to the trial, or if new information is found during the
            trial.
            <br /><br />Any injuries caused by the study treatments, tests or procedures will be covered under the
            sponsor’s insurance, as long as you have followed your study doctor’s instructions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="font-serif text-md font-bold">
  What happens if something changes while I am in the study, e.g., if
  new information is found?
</div>

<p className="pageText" style="margin-bottom: 3rem;">
  Changes may happen in the study that could make you change your mind about continuing
  to take part. If something changes, we will tell you as soon as possible. You can choose to
  leave the study at any time. For more details see the Withdrawals section. The study doctor can
  also choose to take you out of the study if they believe that it is best for you. Your participation
  in the study also stops when the sponsor, health authorities, the ethics or regulatory agencies
  decide that the study must be stopped.
</p>


<div class="font-serif text-md font-bold">
  What happens if something changes while I am in the study, e.g., if
  new information is found?
</div>

<p className="pageText">
  If there is an emergency, call your 24-hour contact right away or go to the closest emergency
  room and contact your study doctor as soon as you can.
  If you become ill or are injured while you are in this research study, you must tell your study
  doctor straight away. Injuries that have been caused by the study treatments, tests or
  procedures are called ‘research injuries’. Injuries caused by your usual medical care or
  your breast cancer, are not research injuries.
  The sponsor has an insurance to cover the costs of research injuries as long as you have
  followed your study doctor´s instructions. The sponsor will pay the costs of medical
  treatment for research injuries, provided that the costs are reasonable, and you did not
  cause the injury yourself. If you have medical insurance, please check with your insurance
  company that taking part in this research study will not affect your coverage.
  The sponsor may also compensate you in accordance with the law of <b> INSERT COUNTRY </b> and by
  signing this form you do not give up any legal right you may have.
</p>
      `
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setBenefitsContent(benefitsContentSection);
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
      body: benefitsContentSection
  });
       const res = await response;
      res.text().then(body => setBenefitsContent(body))  
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

      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: benefitsContent} } />

      <Footer prev={"/6"} next={"/8"} />
    </div>
  )
}

