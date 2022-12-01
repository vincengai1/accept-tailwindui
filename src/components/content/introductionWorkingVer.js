import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
 import { PlayButton } from '@/components/player/PlayButton'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Footer from '../footer/footer';

export default function Introduction({data}) {
  let [introContent, setIntroContent] = useState("");
  let [title, setTitle] = useState(data.title);
  let [description, setDescription] = useState(data.description);
  let [audio, setAudio] = useState("");
  let [blob, setBlob] = useState("");
  let [error, setError] = useState('generic error')
  let router = useRouter();

  


  const introductionContentSection =
        `
        <img alt="video" src="http://localhost:8080/img/video.png"/>
          <div class="font-serif text-md font-bold">
            What is the purpose of this consent?        
          </div>

          <p class="text-sm font-san">
            You are invited to take part in this study because you have <span style="color: #008764"> human epidermal growth factor
            receptor 2 positive (HER2-positive) metastatic breast cancer (MBC).</span> HER2-positive MBC
            means that your tumour has tested positive for a protein called HER2 that promotes the
            growth of cancer cells and has caused the cancer to spread from your breast to the other
            parts of your body. <br/><br/>
            Participation requires your written consent. This Informed Consent Form gives an explanation about what the study
            involves, including:<br/><br/>
            1) The purpose of this study and what you will be asked to do as part of this study;<br/><br/>
            2) The information that may be collected from you as part of this study and how your information will be used or disclosed in the study;<br/><br/>
            3) The potential risks and discomforts associated with this study; and<br/><br/>
            4) How you may withdraw from the study and what happens to your information after you withdraw.<br/><br/>
          </p>
    
          <div class="font-serif text-md font-bold"  id="Voluntary Decision">
              Your decision to participate is voluntary    
          </div>

          <p class="text-sm font-san">
            You have a choice whether or not you would like to participate.
            Your cancer may or may not improve if you join
            the study, however the information we get from this study might help other patients with
            the same kind of cancer in the future.<br/><br/>
            Please take as much time as you need to make a decision about whether or not you would
            like to participate in this study. It may be helpful to talk with your friends and family as you
            make this decision.<br/><br/>
            If you join the study, you can leave at any time (see “Section 14” for more details). Leaving
            will not affect your care. If you choose to leave the study, please let your study doctor know
            as soon as possible. Please consider the study time commitments and responsibilities as a
            research patient when you are deciding to take part.
            If you do not join the study, you will continue to receive care for your HER2-positive MBC.
            Your study doctor or treating physician will talk to you about other possible treatments and
            their risks and benefits.        
          </p>
        `

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

  let textBox = "hello there sir ";



  async function fetchAudio() {
    let url= "http://localhost:8080/speech/synthesize?languageCode=en&voiceId=Joanna";

    const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
      },
        responseType: 'blob',
        method: 'POST',
        mode: 'cors',
        body: textBox
    });

    // const res = await response.blob();

    let blob = new Blob([await response.blob()], {type: 'audio/mpeg', responseType: 'blob'})

    // console.log(typeof blob === "object", 'blob')
    setBlob(blob)
    
  }


  function useObjectUrl (blob) {

    if (typeof blob !== "object") return;
    const url = useMemo(() => URL.createObjectURL(blob), [blob]);

    // useEffect(() => () => URL.revokeObjectURL(url), [blob]);

    // setAudio(url)
    return url;
  }

  function AudioPlayer ({blob}) {
    const src = useObjectUrl(blob);
     return <audio controls {...{src}} />;
  }

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
  
  async function translateHeader(sourceLanguage, targetLanguage) {
    let url= `http://localhost:8080/translate/text?sourceLanguageCode=${sourceLanguage}\&targetLanguageCode=${targetLanguage}`;
    let consolidatedData = title + ' **** ' + description;

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
        // const res = await response;
        const res = await response;
        res.text().then(body => {
          let splitArray =  body.split('****');
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
      // const res = await response;
      const res = await response;
      res.text().then(body => setIntroContent(body))  
  }

  return (
    <div>
      
        <AudioPlayer {...{blob}} />
    
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
      <div className="root" id="new-element-1"  dangerouslySetInnerHTML={{ __html: introContent} } />

      <Footer prev={"/"} next={"/2"}/>
    </div>
  )
}

