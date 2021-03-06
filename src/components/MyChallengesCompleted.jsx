import React from "react";
import { Link } from "react-router-dom";

import styles from "./MyChallenges.module.css";



const MyChallengesCompleted = props => {
    const challenges = props.challenges;
    
    return (
        <ul>
              {
                Object.entries(challenges).map(([key, val]) => {
                  if (val.status === "gecomplete") {
                    return (
                      <li key={key} className={styles.card}>
                        <div className={styles.cardContent}>
                          <Link to={"/challenge1/" + val.grens + "/" + val.id}>
                            <h4>{val.naam}</h4>
                          </Link>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="url(#paint0_linear)"/>
                          <path d="M7 12.9091L10.913 17L17 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                          <defs>
                          <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFC371"/>
                          <stop offset="1" stopColor="#FF5F6D"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                      </li>
                    ) 
                  }
                  return null
                })
              }
            </ul>
    )
}

export default MyChallengesCompleted;