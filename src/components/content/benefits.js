import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';

import { benefitsContentSection } from './text/benefitsText';
import { benefitsAudioSection } from './text/benefitsText'

export default function Benefits({data}) {
  let [benefitsContent, setBenefitsContent] = useState("");
  let [audioContent, setAudioContent] = useState("");

  let [title, setTitle] = useState(data.title.slice(2));
  let [description, setDescription] = useState(data.description);
  let [timeFrame, setTimeFrame] = useState(data.timeFrame);
  let [blob, setBlob] = useState("");
  
  let router = useRouter();

  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setBenefitsContent(benefitsContentSection);
      setAudioContent(benefitsAudioSection);
      fetchAudio(benefitsAudioSection);
    }

    if (targetLanguage) {
      translateAudio('en', targetLanguage);
      translateSection('en', targetLanguage)
      translateHeader('en', targetLanguage)

    }

  }, [])
  
  async function fetchAudio(audioText) {
    let targetLanguage = router.asPath.slice(12)
    if (!targetLanguage) targetLanguage = 'en';

    let url= `http://localhost:8080/speech/synthesize?languageCode=${targetLanguage}&preferredVoiceId=x`;

    const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
      },
        responseType: 'blob',
        method: 'POST',
        mode: 'cors',
        body: audioText
    });

    let blob = new Blob([await response.blob()], {type: 'audio/mpeg', responseType: 'blob'})
    setBlob(blob)
  }


  let audioPlayerData = useMemo(
    () => ({
      title: data.title,
      audio: {
        src: "",
        type: data.audio.type,
      },
      link: `/${data.id}`,
    }),
    [data]
  )
  
  let player =  useAudioPlayer(audioPlayerData, blob)

  
  async function translateHeader(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = title + ' ||||* ' + description;

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
        let splitArray =  body.split(' ||||* ');
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
      <article style={{paddingTop: '0rem'}}>
        <Container>
          <header className="flex flex-col mb-12">
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <h1 className="mt-2 text-4xl font-bold text-darkGray-100" style={{marginBottom:'0'}}>
                    {title} 
                  </h1>
                  <div
                    className="l:text-sm text-darkGray-100"
                    style={{fontSize:'14px !important'}}
                  >
                    {timeFrame}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center" style={{gap:'7px'}}>
                  <PlayButton player={player} size="medium" />
                  <img translate="no" src="http://localhost:8080/img/text.png" alt="Consent" className="h-80px" />
                  <img translate="no" src="http://localhost:8080/img/print.png" alt="Consent" className="h-80px" />

              </div>
            </div>
          </header>
        </Container>
      </article>
      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: benefitsContent} } />

      <Footer prev={"/4"} next={'/6'} />
    </div>

  )
}

