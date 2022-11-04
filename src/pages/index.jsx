import React, { useEffect, useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'

import { useRouter } from 'next/router'

import Data from './data.json';

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

// EpisodeEntry is the index of all the Pages 

function EpisodeEntry({ page, language }) {

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


  async function dataToTranslate(url = 'https://api2.binance.com/api/v3/ticker/24hr') {
      // if (!language) setLanguage('en');

      const response = await fetch(url, {
          method: 'GET',
          // method: 'POST,
          mode: 'cors',
          // body: {
          //   text: {data},
          //   SourceLanguageCode: {language},
          //   TargetLanguageCode: {newLanguage}
          // }
      });
      
      const json = await response.json();

     return json;
  }
        

  return (
    <article
      aria-labelledby={`episode-${page.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${page.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <Link href={`/${page.id}`}>{page.title}</Link>
          </h2>
          <div className="order-first font-mono text-sm leading-7 text-slate-500">
            {page.timeFrame}
          </div>
          <p className="mt-1 text-base leading-7 text-slate-700">
            {page.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center text-sm font-bold leading-6 text-astraGreen-100 hover:text-astraGreen-200 active:text-astraGreen-300"
              aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
                page.title
              }`}
            >
              <PlayPauseIcon
                playing={player.playing}
                className="h-2.5 w-2.5 fill-current"
              />
              <span className="ml-3" aria-hidden="true">
                Listen 
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link
              href={{
                pathname: `/${page.id}`,
                query: {
                  // id: `${episode.id}`,
                  language: `${language}`,
                }
              }}
              className="flex items-center text-sm font-bold leading-6 text-astraGreen-100 hover:text-astraGreen-200 active:text-astraGreen-300"
              aria-label={`Show notes for episode ${page.title}`}
            >
              Start Reading
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default function Home({ pages }) {
  const [translatedData, setTranslatedData] = useState(pages);

  let router = useRouter()
  let language = router.asPath.slice(11)

  // console.log(translatedData, 'translatedData')

  useEffect( () => {
    //  Check the language and
    translateText();
  }, [])

  const translateText = () => {
    // console.log('Here is where youd make the API call', language);

    if (!language) return;

    if (language) {
      //  setTranslatedData to the results of the API call, if no lang just return data as is
      // console.log('input API call')
    }
  }
 
  console.log(pages)
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
          <h1 className="text-2xl font-bold leading-7 text-slate-900">
            Read Informed Consent Document -- {language.toUpperCase()}
          </h1>
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
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
