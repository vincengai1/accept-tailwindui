import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Footer from '../footer/footer';
import {introductionContentSection} from './text/introductionText.js';
import {introductionAudioSection} from './text/introductionText.js';

export default function Introduction({data}) {
  let [introContent, setIntroContent] = useState("");
  let [title, setTitle] = useState(data.title);
  let [description, setDescription] = useState(data.description);
  let [blob, setBlob] = useState("");
  let router = useRouter();
  
  useEffect( () => {
    let targetLanguage = router.asPath.slice(12)

    if (!targetLanguage) {
      setIntroContent(introductionContentSection);
    }

    if (targetLanguage) {
      translateHeader('en', targetLanguage)
      translateSection('en', targetLanguage)
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
        body: introductionAudioSection
    });
 
    let blob = new Blob([await response.blob()], {type: 'audio/mpeg', responseType: 'blob'})
 
    setBlob(blob)
    
  } 

  function AudioPlayer ({blob}) {
    const src = useObjectUrl(blob);

    return <audio controls {...{src}} className="audio-1"/>;
  }


  function useObjectUrl (blob) {

    if (typeof blob !== "object") return;
    const url = useMemo(() => URL.createObjectURL(blob), [blob]);
    
    
    return url;
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
                <PlayButton  player={player} size="large" />
                <h1 className="mt-2 text-4xl font-bold text-slate-900" style={{textAlign: "start"}}>
                  {title} 
                </h1>

              <div className="flex flex-col">
                <div
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                >

                </div>
              </div>
            </div>
            <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
              {description}
            </p>
            <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
            </p>
          </header>
          <hr className="my-12 border-gray-200" />
        
        </Container>
      </article>

      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: introContent} } />

      <Footer prev={"/"} next={"/2"}/>
    </div>
  )
}

