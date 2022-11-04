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


export default function Episode({ episode }) {
    let date = new Date(episode.published)

    const router = useRouter()
    let id = router.asPath.slice(1,2)
    let language = router.asPath.slice(12)
    let [data, setData] = useState('');

    useEffect( () => {
      Data.data.map( (obj) => {
        if (obj.id == id) setData(obj)
      })

    }, [Data])

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
      let title = data.title;


      // HERE WE CAN IMPORT AND RENDER ALL 7 PAGES 
      // {INTORDUCTOI}
      // {DATA+PRIVACY} 
      // with bunch of if (location.pathname =='introduction' ) render {introduction}

      if (id == '1') return <Introduction />    
      if (id == '2') return <Purpose />    
      if (id == '3') return <Logistics />    
      if (id == '4') return <Risks />    
      if (id == '5') return <Benefits />    
      if (id == '6') return <DataPrivacy />    
        
      
    }
  
    return (
    <>
      <Head>
        <title>{`${data.title} - Their Side`}</title>
        <meta name="description" content={data.description} />
      </Head>
      <article className="py-16 lg:py-36">
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              <PlayButton player={player} size="large" />
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {data.title} 
                </h1>
                <div
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                >
                {data.timeFrame}
                </div>
              </div>
            </div>
            <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
              {data.description}
            </p>
          </header>
          <hr className="my-12 border-gray-200" />
          <div
            className="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200"
            // dangerouslySetInnerHTML={{ __html: episode.content }}
          >
            {/* <div>hello</div>
            <div>Language = {language} </div> */}
            


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
