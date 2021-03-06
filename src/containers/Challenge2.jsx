import React, {useState, useEffect} from "react";
import withAuthentication from "../components/auth/WithAuthentication";
import { observer, inject } from "mobx-react";
import { useParams } from "react-router-dom";

// https://www.npmjs.com/package/react-sweet-progress
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Tabbar from "../components/Tabbar";
import main from "../assets/img/template2Match.png";
import bizar from "../assets/img/template2RareDingen.png";
import avond from "../assets/img/template2VrijeTijd.png";
import eten from "../assets/img/template2Eten.png";
import cubas from "../assets/img/tamaraCubas.png";
import styles from "./Challenge2.module.css";

import TopBar from "../components/TopBar";
import stylesTypo from '../styles/typo.module.css';
import stylesUi from "../styles/ui.module.css";

const Challenge2 = ({databaseStore, dataStore}) => {
  let {grens} = useParams();
  let {id} = useParams();

  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(1);

  const [challenge, setChallenge] = useState("");

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  useEffect(() => {
    const getQuestions = async () => {
      const props = {
        challenge: 2,
        grens: grens,
        id: id
      }

      let awaitingChallenge = await databaseStore.getChallenge(props);
      setChallenge(awaitingChallenge);

    }

    getQuestions();
  }, [databaseStore, grens, id]);

  const handleCompletedChallenge = () => {
    if (dataStore.roomId !== 0) {

      const props = {
        roomId: dataStore.roomId,
        userUid: localStorage.uid,
        vraag1: {
          antwoord: answer1,
          vraag: challenge.vraag1.vraag
        },
        vraag2: {
          antwoord: answer2, 
          vraag: challenge.vraag2.vraag
        },
        vraag3: {
          antwoord: answer3,
          vraag: challenge.vraag3.vraag
        },
        grens: grens,
        nummer: id
      }

      databaseStore.updateAnswers(props);

      dataStore.handleAnswerQuestions(0);
    } else {

      const props = {
        vraag1: {
          antwoord: answer1,
          vraag: challenge.vraag1.vraag
        },
        vraag2: {
          antwoord: answer2,
          vraag: challenge.vraag2.vraag
        },
        vraag3: {
          antwoord: answer3,
          vraag: challenge.vraag3.vraag
      }
      }

      const propGrens = grens;

      databaseStore.lookingForMatch(props, propGrens);
    }
  }


  if (!status && count > 0) {
    return (
      <>
        <TopBar title="" />
        <h1 className={stylesUi.visuallyHidden}>{challenge.naam}</h1>
        <img className={styles.main} src={main} alt="Een afbeelding met een knipoog naar de uitdaging."/>
        <div className={styles.card01}>
          <p>Je wordt gematcht met een andere gebruiker. Jullie krijgen beide dezelfde vragen, zo leer je elkaar beter kennen. Als het klikt is er de mogelijkheid om te chatten.</p>
          <p className={stylesUi.shortLine}></p>
        </div>
        <button className={styles.button1Start} onClick={() => setStatus(true)}>Start</button>
      </>
    ) 
  } else {
    switch (count) {
      case 1:
        return (
          <>
            <TopBar title="" />
            <img src={bizar} alt="Een afbeelding met een knipoog naar de uitdaging."/>
            <h1 className={styles.vraag}>{challenge.vraag1.vraag}</h1>
            <div className={stylesUi.flexColumn}>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setCount(count + 1);
                setAnswer1(e.currentTarget.innerHTML);
                }}>{challenge.vraag1.antwoord1}</span>
              </button>
              <p className={styles.longLine}></p>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setCount(count + 1);
                setAnswer1(e.currentTarget.innerHTML);
                }}>{challenge.vraag1.antwoord2}</span>
              </button>
            </div>
            <div className={styles.process}>
                <Progress className={styles.procesbar} percent={33.33} theme={{
                  active: {
                    symbol: "1/3",
                    color: '#FF986F'
                  }
                }} />
            </div>
          </>
        );

        case 2:
        return (
          <>
            <TopBar title="" />
            <img src={avond} alt="Een afbeelding met een knipoog naar de uitdaging."/>
            <h1 className={styles.vraag}>{challenge.vraag2.vraag}</h1>
            <div className={stylesUi.flexColumn}>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setAnswer2(e.currentTarget.innerHTML);
                setCount(count + 1);
                }}>{challenge.vraag2.antwoord1}</span>
              </button>
              <p className={styles.longLine}></p>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setAnswer2(e.currentTarget.innerHTML);
                setCount(count + 1);
                }}>{challenge.vraag2.antwoord2}</span>
              </button>
            </div>
            <div className={styles.process}>
              <Progress className={styles.procesbar} percent={66.66} theme={{
                    active: {
                      symbol: "2/3",
                      color: '#FF986F'
                    }
                  }} />
            </div>
          </>
        );

        case 3:
        return (
          <>
            <TopBar title="" />
            <img src={eten} alt="Een afbeelding met een knipoog naar de uitdaging."/>
            <h1 className={styles.vraag}>{challenge.vraag3.vraag}</h1>
            <div  className={stylesUi.flexColumn}>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setAnswer3(e.currentTarget.innerHTML)
                setCount(count + 1);
                }}>{challenge.vraag3.antwoord1}</span>
              </button>
              <p className={styles.longLine}></p>
              <button className={stylesUi.button4}>
                <span onClick={e => {
                setAnswer3(e.currentTarget.innerHTML);
                setCount(count + 1);
                }}>{challenge.vraag3.antwoord2}</span>
              </button>
            </div>
            <div className={styles.process}>
              <Progress className={styles.procesbar} percent={99.99} strokeWidth={3} theme={{
                    active: {
                      symbol: "3/3",
                      color: '#FF986F'
                    }
                  }} />
            </div>
          </>
        );
        
        case 4:
          handleCompletedChallenge();
          return (
            <>
            <TopBar title="Even wachten..." />
            <section className={styles.container}>
              <div className={styles.tekst} >
                <p className={stylesTypo.small}>op de match zijn antwoorden. Deze vind je terug onder <span className={stylesTypo.accent}>‘Challenges’</span>.</p>
                <p className={stylesUi.shortLine}></p>
                <h2 className={stylesTypo.header1}>Terwijl je wacht...</h2>
                <p className={stylesTypo.small}>Misschien interesseert deze voorstelling je.</p>
              </div>
              <article className={styles.card02} >
                <div className={stylesUi.flexRow}>
                  <img className={styles.miniInfoFoto} width="56px" height="56px" src={cubas} alt="header foto evenement"/>
                  <div>
                    <p className={stylesTypo.accent}>Multitud</p>
                    <p className={stylesTypo.small}>Tamara Cubas</p>
                  </div>  
                </div>
                <p className={styles.miniInfoTekst}>In al hun verschillen realiseren de dansers iets prachtigs, iets waar wij als samenleving zo veel moeite mee hebben: zonder elkaar te verstaan, begrijpen ze elkaar. </p>
                <a className={styles.miniInfoTekstDetail} href="http://www.nextfestival.eu" target="_blank" rel="noopener noreferrer">meer op nextfestival.eu</a>
              </article>
            </section>
            <Tabbar />
            </>
          )
    
      default:
        break;
    }
  }
}

export default inject(`databaseStore`, `dataStore`)(withAuthentication(observer(Challenge2)));
