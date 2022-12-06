import { AudioProvider } from '@/components/AudioProvider'
import { Layout } from '@/components/Layout'
import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../store';
import {Provider} from 'react-redux'

import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {useSelector} from 'react-redux';

import '@/styles/tailwind.css'
import 'focus-visible'
 
import "@/styles/globals.css"

 
function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    const questionslist = useSelector( (state) => state.language.language);
  
    useEffect( () => {
      const handleStart = (url) =>( url !== router.asPath) && setLoading(true);
      const handleComplete = (url) =>( url === router.asPath) && setTimeout( () => {setLoading(false)}, 1000);
      
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)
      
      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)        
      }
    })

    return loading && (
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
    )
}



export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Loading/>
        <AudioProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AudioProvider>
      </Provider>
    </>
  )
}
 