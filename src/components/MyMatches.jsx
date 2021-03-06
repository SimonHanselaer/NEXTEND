import React from "react";
import withAuthentication from "./../components/auth/WithAuthentication"
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

import stylesTypo from '../styles/typo.module.css';
import styles from "./MyMatches.module.css"

const MyMatches = props => {
    let matches = props.matches;

    return (
        <section>
            <ul>
            {
                Object.entries(matches).map(([key, val]) => {
                if (key !== "doNotDelete") {
                    return (
                    <li key={key} className={styles.card}>
                        <Link to={"/room/" + val.roomId}>
                            <p className={stylesTypo.header1}>{val.username}</p>
                        </Link>
                    </li>
                    )
                } 
                return null
                    })
                }
            </ul>
      </section>
  );
};

export default inject(`databaseStore`)(withAuthentication(observer(MyMatches)));
