import React from "react";
import withAuthentication from "./../components/auth/WithAuthentication"
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";

// import faon from "../assets/img/challenge3/faon.png"; 
import faon from "../assets/img/faon.png";
import arrow from "../assets/img/icons/arrowLeft.svg";
import styles from "./ResultatenChallenge3.module.css";

import TopBar from "./TopBar";
import stylesTypo from '../styles/typo.module.css';

const ResultatenChallenge3 = (props) => {
    const {databaseStore} = props;
    const {answer} = props;

    let highest;
 
    let rankResults = [];
    let highestProcent = [];
    let highestProcentB = [];

    const [results, setResults] = useState("");

    useEffect(() => {
        const getResults = async () => {
            let results = await databaseStore.getResults();
            setResults(results);
        }

        getResults();
    }, [databaseStore]);

    return (
        <>
            <TopBar title="Resultaten" />
             {
                results ? (
                    Object.keys(results).map(key => {
                        let resultA = results[key].antwoorden.optieA.count;
                        let resultB = results[key].antwoorden.optieB.count;
                        
                        if(resultA > resultB){
                            let title = results[key].antwoorden.optieA.title;
                            let regio = results[key].antwoorden.optieA.regio;
                            let totalCount = Number(resultA + resultB);
                            let procent = Math.round(resultA / totalCount * 100);
                            rankResults.push({title: title, regio: regio, procent: procent});
                        }else{
                            let title = results[key].antwoorden.optieB.title;
                            let regio = results[key].antwoorden.optieB.regio;
                            let totalCount = Number(resultA + resultB);
                            let procent = Math.round(resultB / totalCount * 100);
                            rankResults.push({title: title, regio: regio, procent: procent});
                        }
                        return null
                    })
                ) : (
                    <p>Loading...</p>
                )
            }
            <section className={styles.container}>
            {
                //om de procent te ordenen van hoog nr laag
                rankResults.sort((a,b) => b.procent - a.procent).map((result, key) => {
                    if(result.title === "antwoord 1" ){
                        highestProcent.push(Number(result.procent));
                        //
                        if (highestProcent.length > 0){
                            highest = Math.max(...highestProcent);

                            if(highest === result.procent && answer === "Optie A"){
                                return (
                                        <article key={key} className={styles.jijBehoort}>
                                            <div className={styles.jijBehoortResult}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                            <div className={styles.jijBehoortInfo}>
                                                <p className={styles.jijBehoortTekst}>jij behoort tot deze stad!</p>
                                                <div className={styles.jijBehoortExtra}>
                                                    <img width="56px" height="56px" src={faon} alt="header foto evenement"/>
                                                    <div>
                                                        <p className={stylesTypo.header1}>FAON</p>
                                                        <p>Performance /.../ 16+ </p>
                                                    </div>
                                                    <a className={styles.linkNExt} href="http://www.nextfestival.eu/nl/evenement/faon" target="_blank" rel="noopener noreferrer"> 
                                                        <img className={styles.arrow} src={arrow} alt="een pijl"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                )
                            }else if(highest !== result.procent && answer === "Optie A"){
                                return (
                                        <article key={key}>
                                            <div className={styles.result}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                        </article>
                                )
                            }else{
                                return (
                                        <article key={key}>
                                            <div className={styles.result}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                        </article>
                                )
                            }
                        }
                    }
                    
                    if(result.title === "antwoord 2"){ 
                        highestProcentB.push(Number(result.procent));
                        //
                        if (highestProcentB.length > 0){
                            highest = Math.max(...highestProcentB);
                            if(highest === result.procent && answer === "Optie B"){
                                return (
                                        <article key={key} className={styles.jijBehoort}>
                                            <div className={styles.jijBehoortResult}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                            <div className={styles.jijBehoortInfo}>
                                                <p className={styles.jijBehoortTekst}>jij behoort tot deze stad!</p>
                                                <div className={styles.jijBehoortExtra}>
                                                    <img width="56px" height="56px" src={faon} alt="header foto evenement"/>
                                                    <div>
                                                        <p className={stylesTypo.header1}>FAON</p>
                                                        <p>Performance /.../ 16+ </p>
                                                    </div>
                                                    <a className={styles.linkNExt} href="http://www.nextfestival.eu/nl/evenement/faon" target="_blank" rel="noopener noreferrer"> 
                                                        <img className={styles.arrow} src={arrow} alt="een pijl"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                )
                            }else if(highest !== result.procent && answer === "Optie B"){
                                return (
                                        <article key={key}>
                                            <div className={styles.result}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                        </article>
                                )
                            }else{
                                return (
                                        <article key={key}>
                                            <div className={styles.result}>
                                                <div>
                                                    <h2 className={stylesTypo.header1}>{result.regio}</h2>
                                                    <p>{result.title}</p>
                                                </div>
                                                <p className={styles.procent}>{result.procent + "%"}</p>
                                            </div>
                                        </article>
                                )
                            }
                        }
                    }  

                    return null
                })
            }
            </section>   
        </>
    )
}

export default inject(`databaseStore`)(withAuthentication(observer(ResultatenChallenge3)));