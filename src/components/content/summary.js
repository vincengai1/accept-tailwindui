import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";


import styles from './summary.module.css';


function Summary() {
  const router = useRouter();
  let lango = router.asPath.slice(13);
  const questionsList = useSelector((state) => state.form.questions)
  const imageLoader = require("./loader");



  const renderQuestionImg = (page) => {

    if (questionsList.includes(page)) {
      return (
        <div>hi</div>
        // <ExportedImage unoptimized={true} width={500} height={500} src="http://localhost:8080/img/Questions.png" style={{marginRight:'5px'}} />
      )
    }
  };

  return (
    <div>
        <div className={styles.page}>
          <div className={styles.subtitle}>
              STEP 2
          </div>
          <div className={styles.title}>
              Read Informed Consent Document
          </div>
        </div>

          <hr className="my-12 border-gray-200" />

        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Introduction</div>
            <div className={styles.description}>What can I expect from the informed consent process?</div>
            <div className={styles.time}>10 minute read</div>

          </div>

          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('1')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/1`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Purpose of Trial</div>
            <div className={styles.description}>What is being tested in this trial, and why?</div>
            <div className={styles.time}>8 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('2')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/2`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>

        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Trial Logistics</div>
            <div className={styles.description}>What will I experience if I choose to join the trial?</div>
            <div className={styles.time}>20 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('3')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/3`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Risks</div>
            <div className={styles.description}>What are the potential side effects and risks?</div>
            <div className={styles.time}>30 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('4')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/4`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Benefits</div>
            <div className={styles.description}>What could I get out of participating?</div>
            <div className={styles.time}>5 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('5')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/5`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Data + Privacy</div>
            <div className={styles.description}>How will my personal information be used and protected?</div>
            <div className={styles.time}>15 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('6')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/6`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Changes</div>
            <div className={styles.description}>What happens if something changes during the trial?</div>
            <div className={styles.time}>5 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('7')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/7`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Withdrawal</div>
            <div className={styles.description}>What happens if I want to quit the trial?</div>
            <div className={styles.time}>5 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('8')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/8`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
        <div className={styles.row} style={{marginBottom:'2rem'}}>
          <div className={styles.leftSection}>
            <div className={styles.subtitle2}>Learn More</div>
            <div className={styles.description}>How do I find out more about the trial?</div>
            <div className={styles.time}>5 minute read</div>

          </div>
          
          <div className={styles.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('9')}

            <button className={styles.revisitButton} >
              <Link
                  href={{
                  pathname: `/9`,
                  query: {
                      language: `${lango}`,
                  }
                  }}
                  className={styles.revisitText}     
              >
                  Revisit
              </Link>
            </button>
          </div>
          
        </div>

          <hr className="my-12 border-gray-200" />
       
    </div>
  )
}

export default Summary