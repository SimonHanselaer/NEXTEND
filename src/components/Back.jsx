import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Back.module.css";

const Back = () => {
    let history = useHistory();

    return (
        // <button className={styles.backButton} onClick={() => history.goBack()}>
        <button className={styles.backButton} onClick={() => history.push("/")}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Mask Group">
            <mask id="mask8" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="16">
            <path id="Vector" d="M9.27009 13.9399C9.05876 13.2099 8.61232 12.5701 8.00009 12.1199L7.00009 11.2099L6.00009 10.3199C5.69009 10.0399 5.42009 9.77988 5.06009 9.42988C4.70009 9.07988 4.06009 8.42988 3.18009 7.64988L8.81009 2.12988C9.04348 1.89649 9.1746 1.57994 9.1746 1.24988C9.1746 0.919815 9.04348 0.60327 8.81009 0.369879C8.5767 0.136488 8.26015 0.0053711 7.93009 0.00537109C7.60002 0.00537109 7.28348 0.136488 7.05009 0.369879L0.450088 6.99988C0.304659 7.15451 0.201362 7.34389 0.150088 7.54988C-0.609912 9.38988 1.73009 12.0899 2.78009 13.1799C4.87009 15.3399 6.78009 15.8899 7.78009 15.8899H8.10009C8.49635 15.821 8.8528 15.6071 9.10009 15.2899C9.22526 15.0909 9.30534 14.8669 9.33471 14.6337C9.36408 14.4005 9.34202 14.1637 9.27009 13.9399Z" fill="#FF0000"/>
            </mask>
            <g mask="url(#mask8)">
            <rect id="Rectangle 260" x="-7" y="-4" width="24" height="24" fill="url(#paint0_linear)"/>
            </g>
            </g>
            <defs>
            <linearGradient id="paint0_linear" x1="-7" y1="-4" x2="17" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC371"/>
            <stop offset="1" stopColor="#FF5F6D"/>
            </linearGradient>
            </defs>
            </svg>
        </button>
    )
}

export default Back;