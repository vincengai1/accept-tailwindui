import { useState, useEffect, useMemo } from 'react'

import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';
// import ExportedImage from "next-image-export-optimizer";

import { risksContentSection } from './text/risksText';
import { risksAudioSection } from './text/risksText';

export default function Risks({data}) {
  let [risksContent, setRisksContent] = useState("");
  let [audioContent, setAudioContent] = useState("");
  let [blob, setBlob] = useState("");

  let [title, setTitle] = useState(data.title);
  let [description, setDescription] = useState(data.description);
  let router = useRouter();
  const imageLoader = require("./loader")
  
 
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setRisksContent(risksContentSection);
      setAudioContent(risksAudioSection);
    }

    if (targetLanguage) {
      translateSection('en', targetLanguage);
      translateHeader('en', targetLanguage);
      translateAudio('en', targetLanguage);
    }

    fetchAudio();
  }, [])


  async function fetchAudio() {
    let url= "http://localhost:8080/speech/synthesize?languageCode=en&voiceId=Joanna";

    const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
      },
        responseType: 'blob',
        method: 'POST',
        mode: 'cors',
        body: audioContent
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

  async function translateAudio(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;

  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept" : "text/plain"
    },
      method: 'POST',
      mode: 'cors',
      body: audioContent
  });
      const res = await response;
      res.text().then(body => setAudioContent(body))  
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
      body: risksContentSection
  });
      const res = await response;
      res.text().then(body => setRisksContent(body))  
  }


  async function translateHeader(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = title + ' |||| ' + description;

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
        let splitArray =  body.split(' |||| ' );
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

      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: risksContent} } />
      
      <Footer prev={"/3"} next={'/5'} />
    </div>
  )
}

