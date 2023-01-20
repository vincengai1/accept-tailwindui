import {  useEffect, useState } from 'react'
import Link from 'next/link'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import {useSelector, useDispatch} from 'react-redux';
import { useRouter } from 'next/router'

import LanguageDropDown from './LanguageDropDown'
import { aboutSection } from '../components/content/text/layoutText';

import styles from '../styles/layout.module.css';


export function Layout({ children }) {
  let hosts = ['AstraZeneca', 'Accept App'];
  let [lang, setLang] = useState("");
  let [aboutContent, setAboutContent] = useState(aboutSection);
  let [translateHeader, setTranslateHeader] = useState("Translate Language");
  let [tabs, setTabs] = useState(["Introduction", "Purpose", "Logistics", "Risks", "Benefits", "Data + Privacy", "Changes", "Withdrawal", "Learn More"]);
  let [translatedTabs, setTranslatedTabs] = useState([]);

  let [newTabs, setNewTabs] = useState([]);

  let router = useRouter()
  let curPage = router.asPath.slice(1,2) - 1;
  let language = router.asPath.slice(11);
  const targetLanguage = useSelector((state) => state.language.language);


 useEffect( () => {
  if (targetLanguage) {
    translateTabs('en', targetLanguage);
  }

  if (!targetLanguage) {
    setTranslatedTabs(tabs);
  }
  
 }, [targetLanguage])

 const targetLanguageChange = (lang) => {
    setLang(lang)
 };

  async function translateTabs(sourceLanguage, targetLanguage) {
  let url= `http://localhost:8080/translate/text?sourceLanguageCode=en\&targetLanguageCode=${targetLanguage}`;
  let consolidatedData = tabs.join(' | ');

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
        let translatedArr = body.split(' | ');
        setTranslatedTabs(translatedArr);
      })  
  }

  return (
    <>
      <header className=" bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-111 lg:items-start lg:overflow-y-auto xl:w-120" style={{background:'white', boxShadow:" 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"}}>
        <div 
        className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:py-6 lg:px-6 xl:px-12 " 
        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link
            href="/"
            className=""
            aria-label="Homepage"
            style={{background:'none'}}
          >
          <img translate="no" 
            src="http://localhost:8080/img/logo.png"
            alt="logoImage"
            className={styles.layoutImg}
            style={{background:'none', marginBottom:'1.5rem'}}
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
                    
                    <span className=" sm:ml-3 sm:block"><LanguageDropDown targetLanguageChange={targetLanguageChange} /></span>
                  </Link>
                </li>
              ))}
            </ul> 

            <ul role="list" className="lg:mt-8 hidden lg:block flex text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4 lg:w-1/2" >
              {translatedTabs.map( (tab, i) => (
                <div style={{dislpay: 'flex', alignItems: 'center'}} key={i}>
                  <div style={{borderLeft: '3px solid #DA5697', height:'22px', position: 'absolute' }} className={curPage == i ? "" : "hidden"}></div>
                  <div key={i} className={curPage == i ? "text-black font-black text-lg ml-4" : "text-lg font-normal text-[#949D9F] hover:text-[#c0ced1] active:text-astraGray-300 mt-2 mb-2 ml-4"} style={{ cursor: 'pointer'}}>

                    <Link href={{
                      pathname:`/${i+1}`,
                      query: {
                        language: `${targetLanguage}`,
                      }
                    }}>
                      {tab}
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          

        <span className="mt-10 hidden lg:block m  h-px w-full bg-slate-200 lg:w-4/5"></span>
        <>
          <div className="text-lg font-normal text-[#949D9F] mt-4 mb-8">Review with Clinical Team</div>

          <button disabled style={{borderRadius: '30px', background: '#E0DEDE', padding: "15px 30px 15px 30px", color: 'white', fontWeight: '800'}}>Schedule Appointment</button>
        </>
      
      </div>
        
        
              
      </header>
              
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 md:ml-105 lg:border-t-0 xl:ml-120">
        <div className="relative">{children}</div>
      </main>
     
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
      
    </>
  )
}
