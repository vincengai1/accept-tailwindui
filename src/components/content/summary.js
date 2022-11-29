import React from 'react'
// import { makeStyles } from '@mui/styles';
// import Divider from '@mui/material/Divider';
// import {Link, Button} from '@mui/material';
// import Question from '../../assets/Questions.png';
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";

// import Highlight from '../../assets/icon.png';
// import Notes from '../../assets/Notes.png';

import styles from './summary.module.css';

// const useStyles = makeStyles( theme => ({
//     root: {
//       width: '80%',
//       display: 'flex',
//       justifyContent:'center',
//       alignItems:'center',
//       flexDirection: 'column',
//       marginLeft:'auto',
//       marginRight:'auto',
//       [theme.breakpoints.down('sm')]: {
//         justifyContent: 'center',
//       },
//     },
//     page: {
//       marginTop:'3rem',
//       marginBottom:'2rem',
//       width:'100%'
//     },
//     title: {
//         fontSize: '40px !important',
//         fontFamily: "Noto Serif !important",
//         color: "#244150",
//         fontWeight: '800 !important',

//     },
//     subtitle: {
//       fontFamily: 'Noto Sans, sans-serif !important',
//       color: "#949D9F",
//       fontWeight: '900 !important',
//       fontSize: "20px !important"
//     },
//     subtitle2: {
//         fontFamily: "Noto Serif !important",
//       color: "#244150",
//       fontWeight: '900 !important',
//       fontSize: "24px !important",
//       lineHeight:'28.8px'
//     },
//     description: {
//       fontFamily: 'Noto Sans, sans-serif !important',
//       fontSize: "16px !important",
//       lineHeight:'24px'
//     },
//     time: {
//       color:"#949D9F",
//       fontFamily: 'Noto Sans, sans-serif !important',
//       fontSize: "14px !important",
//       lineHeight:'24px'
//     },
//     row: {
//       display:'flex',
//       justifyContent:'space-between',
//       alignItems:'center',
//       width:'100%'
//     },
//     leftSection: {

//     },
//     rightSection: {
      
//     },
//     revisitButton: {
//       borderRadius: '25px',

//     }

// }));

function Summary() {

  const questionsList = useSelector((state) => state.form.questions)
 
//   const buttons = () => {
//     if ('checking redux store for session') {
//       return (
//         <div className={classes.rightSection} style={{display:'flex'}}>
//           <img src={Question}  />
//           <img src={Highlight} />
//           <img src={Notes} />

//           <button className={classes.revisitButton}>Revisit</button>
//         </div>
//       )
//     }
//   }

//   const visitPage = (page) => {
//     history.push(page)
//   };
//   const renderQuestionImg = (page) => {

//     if (questionsList.includes(page)) {
//       return (
//         <img src={Question} style={{marginRight:'5px'}} />
//       )
//     }
//   };

let renderSection = `
    <div className={styles.intro}>
        hello Summary
    </div>
`

  return (
    <div>
        <div className={styles.intro}>
            hello Summary
        </div>
        {/* <div className={classes.page}>
          <div className={classes.subtitle}>
              STEP 2
          </div>
          <div className={classes.title}>
              Read Informed Consent Document
          </div>
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>

        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Introduction</div>
            <div className={classes.description}>What can I expect from the informed consent process?</div>
            <div className={classes.time}>10 minute read</div>

          </div>

          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Introduction')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Introduction')}>
              Revisit
            </button>
          </div>
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Purpose of Trial</div>
            <div className={classes.description}>What is being tested in this trial, and why?</div>
            <div className={classes.time}>8 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Purpose')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Purpose')}>
              Revisit
            </button>
          </div>

        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Trial Logistics</div>
            <div className={classes.description}>What will I experience if I choose to join the trial?</div>
            <div className={classes.time}>20 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Logistics')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Logistics')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Risks</div>
            <div className={classes.description}>What are the potential side effects and risks?</div>
            <div className={classes.time}>30 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Risks')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Risks')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Benefits</div>
            <div className={classes.description}>What could I get out of participating?</div>
            <div className={classes.time}>5 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Benefits')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Benefits')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Data + Privacy</div>
            <div className={classes.description}>How will my personal information be used and protected?</div>
            <div className={classes.time}>15 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Data+Privacy')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Data+Privacy')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Changes</div>
            <div className={classes.description}>What happens if something changes during the trial?</div>
            <div className={classes.time}>5 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Changes')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Changes')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Withdrawal</div>
            <div className={classes.description}>What happens if I want to quit the trial?</div>
            <div className={classes.time}>5 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('Withdrawal')}

            <button className={classes.revisitButton} onClick={() => visitPage('/Withdrawal')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
       
        <div className={classes.row} style={{marginBottom:'2rem'}}>
          <div className={classes.leftSection}>
            <div className={classes.subtitle2}>Learn More</div>
            <div className={classes.description}>How do I find out more about the trial?</div>
            <div className={classes.time}>5 minute read</div>

          </div>
          
          <div className={classes.rightSection} style={{display:'flex'}}>
            {renderQuestionImg('LearnMore')}

            <button className={classes.revisitButton} onClick={() => visitPage('/LearnMore')}>
              Revisit
            </button>
          </div>
          
        </div>

        <Divider style={{width:'100%', marginBottom:'2rem'}}/>
        */}
    </div>
  )
}

export default Summary