import { Fragment, useEffect, useId, useState } from 'react'
// import img from "next-image-export-optimizer";
import Link from 'next/link'

import { AudioPlayer } from '@/components/player/AudioPlayer'


import {useSelector, useDispatch} from 'react-redux';

import LanguageDropDown from './LanguageDropDown'
import { useRouter } from 'next/router';
import { aboutSection } from '../components/content/text/layoutText';

import styles from '../styles/layout.module.css';

function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}


function PersonIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
      <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
    </svg>
  )
}

export function Layout({ children }) {
  let hosts = ['AstraZeneca', 'Accept App'];
  let [lang, setLang] = useState("");
  let [aboutContent, setAboutContent] = useState(aboutSection);
  let [translateHeader, setTranslateHeader] = useState("Translate Language");
  let [tabs, setTabs] = useState(["Introduction", "Purpose", "Logistics", "Risks", "Benefits", "Data + Privacy", "Changes", "Withdrawal", "Learn More"]);
  let [newTabs, setNewTabs] = useState([]);

  const targetLanguage = useSelector((state) => state.language.language);

 useEffect( () => {
  if (targetLanguage) {
    // translateSection('en', targetLanguage);
  }

  if (!targetLanguage) {
    // setNewTranslatedHeader(translateHeader);
    // setNewContent(aboutContent);
  }
  
 }, [targetLanguage])

 const targetLanguageChange = (lang) => {
    setLang(lang)
 };

  async function translateSection(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=en\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = aboutSection + ' |||| ' + translateHeader;

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
        let translatedArr = body.split(' |||| ')
        let translatedAbout = translatedArr[0];
        let translatedLang = translatedArr[1];
        setNewContent(translatedAbout);
        setNewTranslatedHeader(translatedLang);

      })  
  }

  return (
    <>
      <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120" style={{background:'white', boxShadow:" 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"}}>
        <div 
        className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:py-10 lg:px-8 xl:px-12 " 
        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link
            href="/"
            className=""
            aria-label="Homepage"
            style={{background:'none'}}
          >
          <img 
            src="http://localhost:8080/img/logo.png"
            alt="logoImage"
            className={styles.layoutImg}
            style={{background:'none', marginBottom:'2rem'}}
          />
          </Link>

          <ul role="list" className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4" >
              {[
                ['Language', 'Language'],

              ].map(([label, Icon]) => (
                <li key={label} className="flex" >
                  <Link
                    href="/"
                    className="group flex items-center"
                    aria-label={'Language'}
                 
                  >
                  <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                    
                    <span className=" sm:ml-3 sm:block"><LanguageDropDown targetLanguageChange={targetLanguageChange}/></span>
                  </Link>
                </li>
              ))}
            </ul> 


          <ul role="list" className="mt-10 flex gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4 lg:w-1/2" >
            
            <li>hi</li>
            <li>bye</li>
          </ul>
          


        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="relative">{children}</div>
      </main>
     
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
      
    </>
  )
}
