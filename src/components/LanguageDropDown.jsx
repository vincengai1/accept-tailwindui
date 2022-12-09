import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import {useSelector, useDispatch} from 'react-redux';
import { changeLanguage } from '../slices/languageSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageDropDown({targetLanguageChange}) {
  const [languageList, setLanguageList] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const dispatch = useDispatch();

  const targetLanguage = useSelector( (state) => state.language.language);

  useEffect( () => {
    grabLanguageList();
    // grabVoiceList();
    
  }, [])

    async function grabLanguageList() {
      let serverURL = 'http://localhost:8080'

      const response = await fetch(`${serverURL}/translate/speakable-language-list`, {
        method: 'GET',
        mode: 'cors',
    });
     const json = await response.json();
    //  console.log(json, 'language list')
     setLanguageList(json);
  }

  function handleLanguageChange(language)  {
    dispatch(changeLanguage(`${language.code}`))

    setCurrentLanguage(`${language.name}`)
  };

  // async function grabVoiceList() {
  //     let serverURL = 'http://localhost:8080'

  //     const response = await fetch(`${serverURL}/speech/voice-list&langaugeCode=`, {
  //       method: 'GET',
  //       mode: 'cors',
  //   });
  //    const json = await response.json();
  //    console.log(json, 'voice list')
  //   //  setLanguageList(json);
  // }

  // function handleLanguageChange(language)  {
  //   dispatch(changeLanguage(`${language.code}`))

  //   setCurrentLanguage(`${language.name}`)
  // };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {currentLanguage}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="inherit right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {languageList.map((language, i) => {
              return (
                <div className="py-1" key={i}>
                  <Menu.Item >
                    {({ active }) => (
                      <Link
                          href={{
                              pathname: '/',
                              query: {
                              language: `${language.code}`,
                              }
                          }}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => handleLanguageChange(language)}
                      >
                        {language.name}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              )
            })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}