import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';

import { benefitsContentSection } from './text/benefitsText';
import { benefitsAudioSection } from './text/benefitsText'
// import img from "next-image-export-optimizer";

export default function Benefits({data}) {
  let [benefitsContent, setBenefitsContent] = useState("");
  let [title, setTitle] = useState(data.title.slice(2));
  let [description, setDescription] = useState(data.description);
  let [audio, setAudio] = useState("");

  let router = useRouter();
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

      <Footer prev={"/4"} next={'/6'} />
    </div>

  )
}

