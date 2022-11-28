import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router'

import Data from './data.json'

import Introduction from '../components/content/Introduction';
import Purpose from '../components/content/purpose';
import Logistics from '../components/content/logistics';
import Risks from '../components/content/risks';
import Benefits from '../components/content/benefits';
import DataPrivacy from '../components/content/dataPrivacy';
import Changes from '../components/content/changes';
import Withdrawal from '@/components/content/withdrawal'
import LearnMore from '@/components/content/learnMore';

import {useSelector} from 'react-redux';

export default function Episode({ episode }) {
    let [title, setTitle] = useState(episode.title);
    let [description, setDescription] = useState(episode.description);
    let [timeFrame, setTimeFrame] = useState(episode.timeFrame);

    const router = useRouter()
    let id = router.asPath.slice(1,2)
    let [data, setData] = useState('');

  const targetLanguage = useSelector( (state) => state.language.language);

    useEffect( () => {
      Data.data.map( (obj) => {
        if (obj.id == id) setData(obj)
      })
    }, [Data])

      useEffect( () => {
        let targetLanguage = router.asPath.slice(12)

        if (targetLanguage) {
          translateSection('en', targetLanguage);
        }
      }, [targetLanguage])


  async function translateSection(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = title + ' **** ' + description + ' **** ' + timeFrame;
  
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
              let splitArray = body.split(' **** ')
              let translatedTitle = splitArray[0];
              let translatedDescription = splitArray[1];
              let translatedTimeFrame = splitArray[2];

              setTitle(translatedTitle);
              setDescription(translatedDescription);
              setTimeFrame(translatedTimeFrame);
            })  
  }

    let audioPlayerData = useMemo(
      () => ({
        title: data.title,
        audio: {
          src: episode.audio.src,
          type: episode.audio.type,
        },
        link: `/${episode.id}`,
      }),
      [episode]
    )

    let player = useAudioPlayer(audioPlayerData)
  
    const renderPage = () => {
      // console.log(episode, 'hi')
      if (id == '1') return <Introduction data={episode}/>    
      if (id == '2') return <Purpose data={episode}/>    
      if (id == '3') return <Logistics data={episode}/>    
      if (id == '4') return <Risks data={episode}/>    
      if (id == '5') return <Benefits data={episode}/>    
      if (id == '6') return <DataPrivacy data={episode}/>    
      if (id == '7') return <Changes data={episode}/>    
      if (id == '8') return <Withdrawal data={episode}/>    
      if (id == '9') return <LearnMore data={episode}/>    
      
    }
  
    return (
    <>
      <article className="py-16 lg:">
        <Container>
          <div
            className="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200"
            // dangerouslySetInnerHTML={{ __html: episode.content }}
          >
            {renderPage()}
          </div>
        </Container>
      </article>
    </>
  )
}
 
export async function getStaticProps({params}, context) {
  let feed = await parse('https://their-side-feed.vercel.app/api/feed')
  let data = Data.data;

  let episode = data
    .map(({ id, title, description, content, audio,  }) => ({
      id: id.toString(),
      title: `${id}: ${title}`,
      description,
      content,
      audio: {
        src: audio.src,
        type: audio.type,
      },
    }))
    .find(({ id }) => id === params.episode)

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episode,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let feed = await parse('https://their-side-feed.vercel.app/api/feed')
  let data = Data.data; 

  return {
    paths: data.map(({ id }) => ({
      params: {
        episode: id,
      },
    })),
    fallback: 'blocking',
  }
}
