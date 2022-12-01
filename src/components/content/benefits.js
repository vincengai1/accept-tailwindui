import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import Footer from '../footer/footer';

export default function Benefits({data}) {
  let [benefitsContent, setBenefitsContent] = useState("");
  let [title, setTitle] = useState(data.title);
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


  const benefitsContentSection =
        `             
      <div class="mb-14 font-serif text-md font-bold ">
        What are the possible benefits of taking part?
      </div>
      <div class="font-san bg-astraGray-100 text-fontGray-100 p-8 flex flex-row rounded-xl mb-14">
        <div class="flex flex-row">
          <div class="basis-1/2">
            <img alt="benefits" src="http://localhost:8080/img/Benefits.png" class="h-80px mr-20" />
          </div>
        </div>
      
        <div>
          <p className="boxText">
            <b>The main potential benefit is improving outcomes for future patients. </b>
            <br /><br />Initial research suggests trastuzumab deruxtecan, or T-DXd, could help slow the progress of
            HER2-positive MBC.
          </p>
        </div>
      </div>
      </div>
      
      
      <p className="pageText" style="margin-bottom: 2rem">
        There is no certainty that you will have any benefit from any of the study treatments.
        However, it is possible that the study treatment could delay your MBC from getting worse.
        The information the study sponsor receives from this study may help to improve treatments
        for patients with HER2-positive MBC. It is not certain that you will directly benefit from the
        participation in the study. Your participation may, however, <b> help other patients in the future</b>
        by improving the knowledge of diseases and improving medical care.
      </p>
      
      
      <div class="mb-2 mt-7 font-serif text-md font-bold ">
        Early Results
      </div>
      
      <p className="pageText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis elit ac leo pulvinar ultricies. Aliquam neque
        sem, venenatis vel quam in, porta semper ipsum. Aliquam pharetra est et nulla consequat suscipit. Aliquam rutrum,
        massa non posuere maximus, urna nulla iaculis sem, non hendrerit erat justo ac nisi. Proin lacinia ornare ipsum, eget
        aliquet leo viverra et. In purus odio, sollicitudin vel lectus eu, vulputate euismod tortor. Integer a dignissim
        turpis, eget porttitor urna. Nam dapibus, sapien quis vulputate accumsan, ipsum risus maximus augue, eget efficitur
        elit orci eget urna. Pellentesque porta sit amet lorem at ullamcorper. Donec ultricies accumsan urna vulputate
        commodo.
        <br /><br />
        <ul>
          <li> Aliquam non malesuada metus, fermentum tristique magna. </li>
          <li> Aliquam non malesuada metus, fermentum tristique magna. </li>
          <li> Aliquam non malesuada metus, fermentum tristique magna. </li>
        </ul>
        <br />
      
        Donec consectetur iaculis sollicitudin. Mauris tincidunt nunc ac dolor condimentum, vitae hendrerit turpis semper.
        Maecenas sed ultrices quam, sit amet tempus dolor. Donec ultrices eleifend libero, eget viverra tellus accumsan id.
        Suspendisse imperdiet enim risus, nec dignissim sem rhoncus et. Suspendisse potenti. Aliquam et finibus nunc, sed
        iaculis metus.
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
      // const res = await response;
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

