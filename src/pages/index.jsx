import React, { useEffect, useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'

import { useRouter } from 'next/router'

import Data from './data.json';

import {useSelector} from 'react-redux';

function PlayPauseIcon({ playing, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
      {playing ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        />
      ) : (
        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
      )}
    </svg>
  )
}


function EpisodeEntry({ page, language }) {
  let [title, setTitle] = useState(page.title.slice(2));
  let [description, setDescription] = useState(page.description);
  let [timeFrame, setTimeFrame] = useState(page.timeFrame);
  let [listen, setListen] = useState("Listen");
  let [reading, setReading] = useState("Start Reading");

  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newTimeFrame, setNewTimeFrame] = useState("");
  let [newListen, setNewListen] = useState("");
  let [newReading, setNewReading] = useState("");

  const targetLanguage = useSelector( (state) => state.language.language);


  useEffect( () => {
    if (targetLanguage) {
      translateData('en', targetLanguage);
      translateText('en', targetLanguage);
    }

    if (!targetLanguage) {
      setNewTitle(title);
      setNewDescription(description);
      setNewTimeFrame(timeFrame);
      setNewReading(reading);
      setNewListen(listen);
    }
  }, [targetLanguage])

  let audioPlayerData = useMemo(
    () => ({
      title: page.title,
      audio: {
        src: page.audio.src,
        type: page.audio.type,
      },
      link: `/${page.id}`,
    }),
    [page]
  )

  let player = useAudioPlayer(audioPlayerData)

  async function translateData(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = title + ' |||| ' + description + ' |||| ' + timeFrame;
  

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
        let splitArray = body.split(' |||| ')
        let translatedTitle = splitArray[0];
        let translatedDescription = splitArray[1];
        let translatedTimeFrame = splitArray[2];

        setNewTitle(translatedTitle);
        setNewDescription(translatedDescription);
        setNewTimeFrame(translatedTimeFrame);
      })  
  }

  async function translateText(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = listen + ' |||| ' + reading ;
  

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
        let splitArray = body.split(' |||| ')
        let translatedListen = splitArray[0];
        let translatedReading = splitArray[1];

        setNewListen(translatedListen);
        setNewReading(translatedReading);
 
      })  
  }

  return (
    <article
      aria-labelledby={`episode-${page.id}-title`}
      style={{paddingTop: '2rem', paddingBottom: '2rem'}}
    >
      <Container >
        <div className="flex flex-col items-start" >
          <div
            id={`episode-${page.id}-title`}
            className="text-lg font-bold text-slate-900"
            style={{color: "#244150", fontWeight: '900', fontSize: '24px', lineHeight: '28.8px'}}
          >
            <Link     
              href={{
                pathname: `/${page.id}`,
                query: {
                  language: `${language}`,
                }
              }}>{newTitle}</Link>
          </div>
          <div className="order-first text-sm leading-7 text-slate-500" style={{color:"#949D9F"}}>
            {newTimeFrame}
          </div>
          <p className="text-base leading-7 text-slate-700">
            {newDescription}
          </p>
          <div className="mt-1 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center text-sm font-thin leading-6 text-astraPink-200 hover:text-astraPink-100 active:text-astraPink-300"
              aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
                page.title
              }`}
            >
              <PlayPauseIcon
                playing={player.playing}
                className="h-2.5 w-2.5 fill-current"
              />
               <span className="ml-3" aria-hidden="true">                
                {newListen} 
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-thin text-slate-400"
            >
              /
            </span>
            <Link
              href={{
                pathname: `/${page.id}`,
                query: {
                  language: `${language}`,
                }
              }}
              className="flex items-center text-sm font-thin leading-6 text-astraPink-200 hover:text-astraPink-100 active:text-astraPink-300"
              aria-label={`Show notes for episode ${page.title}`}
            >
              {newReading}
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default function Home({ pages }) {
  const [translatedData, setTranslatedData] = useState(pages);
  let [header, setHeader] = useState(" Informed Consent Document ")
  let [newHeader, setNewHeader] = useState("");
  const targetLanguage = useSelector( (state) => state.language.language);

  useEffect( () => {
    if (targetLanguage) {
      translateText('en', targetLanguage);
    }

    if (!targetLanguage) {
      setNewHeader(header)
    }
  }, [targetLanguage])

  async function translateText(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  
  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept" : "text/plain"
    },
      method: 'POST',
      mode: 'cors',
      body: header
  });

    const res = await response;
      res.text().then(body => {
        setNewHeader(body)
      })  
  }


  let router = useRouter()
  let language = router.asPath.slice(11)

   return (
    <>
      <Head>
        <title>
          Their Side - Conversations with the most tragically misunderstood
          people of our time
        </title>
        <meta
          name="description"
          content="Conversations with the most tragically misunderstood people of our time."
        />
      </Head>
      <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
        <Container>
          <h1 style={{fontSize: '40px', fontWeight: '900', lineHeight: '48px', color: "#244150",  }}>
            {newHeader}
          </h1>
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100" >
          {translatedData.map((page) => (
            <EpisodeEntry key={page.id} page={page} language={language}/>
          ))}
        </div>
      </div>
    </>
    )
}

export async function getStaticProps() {
  let data = Data.data;

  return {
    props: {
      pages: data.map(
        ({ id, title, description, audio, timeFrame }) => ({
          id,
          title: `${id}: ${title}`,
          timeFrame,
          description,
          audio: {
            src: audio.src,
            type: audio.type
          },
        })
      ),
    },
    revalidate: 10,
  }
}
