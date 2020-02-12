import React from "react";
import Back from "./Back";

import styles from "./TopBar.module.css";

const TopBar = (prop) => {
    let title = prop.title;

    switch (title) {
        case "empty":
            return (
                <section className={styles.topBar}>
                    <div className={styles.topBarBackground}></div>
                    <Back />
                </section>
            )

        case "nextend":
            return (
                <section className={styles.topBar}>
                    <div className={styles.topBarBackground}></div>
                    <svg className={styles.topBarImage} width="144" height="39" viewBox="0 0 144 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.796 28.626V32H4.388V28.626L1.126 22.76H3.618L4.92 25.294L5.606 26.834L6.306 25.294L7.608 22.76H10.058L6.796 28.626ZM21.7109 22.62C22.6443 22.62 23.4469 22.8113 24.1189 23.194C24.8003 23.5673 25.3229 24.1133 25.6869 24.832C26.0509 25.5413 26.2329 26.3907 26.2329 27.38C26.2329 28.3693 26.0509 29.2233 25.6869 29.942C25.3229 30.6513 24.8003 31.1973 24.1189 31.58C23.4469 31.9533 22.6443 32.14 21.7109 32.14C20.7776 32.14 19.9703 31.9533 19.2889 31.58C18.6076 31.1973 18.0849 30.6513 17.7209 29.942C17.3569 29.2233 17.1749 28.3693 17.1749 27.38C17.1749 26.3907 17.3569 25.5413 17.7209 24.832C18.0849 24.1133 18.6076 23.5673 19.2889 23.194C19.9703 22.8113 20.7776 22.62 21.7109 22.62ZM21.7109 24.51C21.0389 24.51 20.5256 24.7527 20.1709 25.238C19.8163 25.7233 19.6389 26.4373 19.6389 27.38C19.6389 28.3227 19.8163 29.0367 20.1709 29.522C20.5256 30.0073 21.0389 30.25 21.7109 30.25C22.3829 30.25 22.8916 30.0073 23.2369 29.522C23.5916 29.0367 23.7689 28.3227 23.7689 27.38C23.7689 26.4373 23.5916 25.7233 23.2369 25.238C22.8916 24.7527 22.3829 24.51 21.7109 24.51ZM42.9812 28.234C42.9812 29.5313 42.6359 30.5067 41.9452 31.16C41.2545 31.8133 40.2232 32.14 38.8512 32.14C37.4885 32.14 36.4572 31.8133 35.7572 31.16C35.0665 30.5067 34.7212 29.5313 34.7212 28.234V22.76H37.1432V28.276C37.1432 28.9387 37.2832 29.4333 37.5632 29.76C37.8432 30.0867 38.2725 30.25 38.8512 30.25C40.0085 30.25 40.5872 29.592 40.5872 28.276V22.76H42.9812V28.234ZM55.6777 28.626H54.2357V32H51.8697V22.76H56.2797C57.3997 22.76 58.2583 23.012 58.8557 23.516C59.4623 24.02 59.7657 24.748 59.7657 25.7C59.7657 26.372 59.6117 26.932 59.3037 27.38C58.9957 27.828 58.5477 28.1593 57.9597 28.374L60.3117 32H57.6517L55.6777 28.626ZM54.2357 26.918H55.8737C56.387 26.918 56.7603 26.8247 56.9937 26.638C57.227 26.4513 57.3437 26.1527 57.3437 25.742C57.3437 25.3407 57.227 25.0467 56.9937 24.86C56.7603 24.6733 56.387 24.58 55.8737 24.58H54.2357V26.918ZM72.134 22.62C73.0113 22.62 73.758 22.7507 74.374 23.012C74.9993 23.2733 75.578 23.698 76.11 24.286L74.752 25.854C74.444 25.3873 74.08 25.0467 73.66 24.832C73.2493 24.608 72.7547 24.496 72.176 24.496C71.6907 24.496 71.3173 24.58 71.056 24.748C70.7947 24.916 70.664 25.14 70.664 25.42C70.664 25.6533 70.7993 25.8447 71.07 25.994C71.35 26.134 71.8213 26.2647 72.484 26.386C73.7627 26.6193 74.6727 26.96 75.214 27.408C75.7647 27.856 76.04 28.486 76.04 29.298C76.04 29.886 75.872 30.3947 75.536 30.824C75.2 31.2533 74.7333 31.58 74.136 31.804C73.548 32.028 72.8807 32.14 72.134 32.14C71.0887 32.14 70.2393 32.014 69.586 31.762C68.9327 31.5007 68.368 31.104 67.892 30.572L69.124 28.892C69.488 29.396 69.8987 29.7507 70.356 29.956C70.8133 30.1613 71.364 30.264 72.008 30.264C72.5213 30.264 72.904 30.194 73.156 30.054C73.4173 29.9047 73.548 29.6947 73.548 29.424C73.548 29.2093 73.408 29.0367 73.128 28.906C72.8573 28.766 72.4 28.6353 71.756 28.514C70.9627 28.3553 70.3047 28.1687 69.782 27.954C69.2687 27.73 68.8673 27.4313 68.578 27.058C68.298 26.6847 68.158 26.2087 68.158 25.63C68.158 25.0513 68.312 24.5333 68.62 24.076C68.9373 23.6187 69.3947 23.264 69.992 23.012C70.5987 22.7507 71.3127 22.62 72.134 22.62ZM91.9098 30.138V32H84.5318V22.76H91.7278V24.622H86.9398V26.498H90.7478V28.248H86.9398V30.138H91.9098ZM107.406 30.138V32H100.364V22.76H102.772V30.138H107.406ZM118.194 24.622V26.582H122.002V28.444H118.194V32H115.786V22.76H122.968V24.622H118.194Z" fill="black"/>
<path d="M9.828 0.366C10.056 0.366 10.248 0.431999 10.404 0.563999C10.572 0.696 10.68 0.876 10.728 1.104C10.86 1.752 10.98 2.43 11.088 3.138C11.208 3.834 11.31 4.542 11.394 5.262C11.478 5.982 11.538 6.696 11.574 7.404C11.622 8.112 11.646 8.796 11.646 9.456C11.646 9.744 11.64 10.086 11.628 10.482C11.616 10.866 11.58 11.268 11.52 11.688C11.46 12.096 11.376 12.498 11.268 12.894C11.16 13.29 11.01 13.644 10.818 13.956C10.626 14.268 10.38 14.52 10.08 14.712C9.792 14.904 9.444 15 9.036 15C8.172 15 7.386 14.802 6.678 14.406C5.982 14.01 5.358 13.506 4.806 12.894C4.266 12.27 3.792 11.586 3.384 10.842C2.976 10.086 2.628 9.354 2.34 8.646V14.442C2.34 14.694 2.25 14.904 2.07 15.072C1.902 15.252 1.692 15.342 1.44 15.342C1.2 15.342 0.99 15.252 0.81 15.072C0.63 14.892 0.54 14.682 0.54 14.442V1.716C0.54 1.512 0.606 1.326 0.738 1.158C0.87 0.977999 1.05 0.887999 1.278 0.887999C1.59 0.887999 1.86 0.953999 2.088 1.086C2.328 1.206 2.544 1.368 2.736 1.572C2.928 1.764 3.096 1.98 3.24 2.22C3.396 2.46 3.54 2.7 3.672 2.94C3.84 3.24 4.002 3.57 4.158 3.93C4.326 4.278 4.482 4.632 4.626 4.992C4.782 5.352 4.932 5.712 5.076 6.072C5.232 6.42 5.382 6.75 5.526 7.062C5.586 7.194 5.7 7.44 5.868 7.8C6.036 8.148 6.228 8.55 6.444 9.006C6.66 9.462 6.894 9.936 7.146 10.428C7.398 10.92 7.644 11.376 7.884 11.796C8.136 12.204 8.364 12.54 8.568 12.804C8.772 13.068 8.94 13.2 9.072 13.2C9.24 13.2 9.372 13.032 9.468 12.696C9.576 12.348 9.654 11.952 9.702 11.508C9.762 11.064 9.798 10.638 9.81 10.23C9.834 9.822 9.846 9.546 9.846 9.402C9.846 8.058 9.768 6.72 9.612 5.388C9.468 4.056 9.246 2.736 8.946 1.428C8.934 1.392 8.928 1.338 8.928 1.266C8.928 1.026 9.018 0.815999 9.198 0.635999C9.378 0.455999 9.588 0.366 9.828 0.366ZM31.8029 12.624C32.0789 12.624 32.3069 12.702 32.4869 12.858C32.6789 13.014 32.7749 13.236 32.7749 13.524C32.7749 13.764 32.6969 13.968 32.5409 14.136C32.3849 14.304 32.1869 14.4 31.9469 14.424L24.6749 14.982C24.6269 14.982 24.5849 14.988 24.5489 15C24.5129 15 24.4709 15 24.4229 15C24.0029 15 23.6369 14.856 23.3249 14.568C23.0129 14.268 22.7489 13.884 22.5329 13.416C22.3289 12.948 22.1609 12.426 22.0289 11.85C21.9089 11.262 21.8129 10.686 21.7409 10.122C21.6809 9.558 21.6389 9.03 21.6149 8.538C21.5909 8.034 21.5789 7.632 21.5789 7.332C21.5789 7.08 21.5849 6.768 21.5969 6.396C21.6089 6.024 21.6389 5.628 21.6869 5.208C21.7349 4.788 21.8009 4.368 21.8849 3.948C21.9809 3.528 22.1069 3.144 22.2629 2.796C22.4309 2.448 22.6289 2.16 22.8569 1.932C23.0969 1.692 23.3849 1.554 23.7209 1.518L30.9389 0.762C31.2029 0.762 31.4309 0.846 31.6229 1.014C31.8269 1.17 31.9289 1.386 31.9289 1.662C31.9289 1.89 31.8509 2.094 31.6949 2.274C31.5389 2.442 31.3469 2.538 31.1189 2.562L24.8189 3.21C24.8309 3.966 24.8549 4.722 24.8909 5.478C24.9269 6.222 24.9749 6.972 25.0349 7.728L29.8409 7.044C29.8649 7.044 29.8829 7.044 29.8949 7.044C29.9189 7.032 29.9429 7.026 29.9669 7.026C30.2069 7.026 30.4169 7.116 30.5969 7.296C30.7769 7.476 30.8669 7.686 30.8669 7.926C30.8669 8.142 30.7889 8.34 30.6329 8.52C30.4889 8.7 30.3089 8.802 30.0929 8.826L25.1429 9.528C25.1789 10.14 25.2089 10.74 25.2329 11.328C25.2689 11.916 25.2989 12.516 25.3229 13.128L31.8029 12.624ZM49.1548 7.548C49.2868 7.764 49.4548 8.034 49.6588 8.358C49.8628 8.682 50.0728 9.042 50.2888 9.438C50.5168 9.822 50.7388 10.224 50.9548 10.644C51.1828 11.064 51.3868 11.472 51.5668 11.868C51.7468 12.252 51.8908 12.618 51.9988 12.966C52.1068 13.302 52.1608 13.584 52.1608 13.812C52.1608 14.136 52.0588 14.412 51.8548 14.64C51.6508 14.868 51.3808 14.982 51.0448 14.982C50.7448 14.982 50.4088 14.826 50.0368 14.514C49.6648 14.202 49.2988 13.836 48.9388 13.416C48.5908 12.984 48.2668 12.552 47.9668 12.12C47.6668 11.688 47.4328 11.352 47.2648 11.112L44.9428 15.522C44.8588 15.666 44.7448 15.78 44.6008 15.864C44.4568 15.948 44.3008 15.99 44.1328 15.99C43.8808 15.99 43.6648 15.9 43.4848 15.72C43.3168 15.552 43.2328 15.342 43.2328 15.09C43.2328 15.006 43.2928 14.826 43.4128 14.55C43.5448 14.274 43.7068 13.95 43.8988 13.578C44.0908 13.194 44.3008 12.786 44.5288 12.354C44.7688 11.922 44.9908 11.508 45.1948 11.112C45.4108 10.716 45.6028 10.368 45.7708 10.068C45.9508 9.756 46.0708 9.54 46.1308 9.42C45.9868 9.156 45.7948 8.838 45.5548 8.466C45.3268 8.082 45.0808 7.674 44.8168 7.242C44.5528 6.798 44.2888 6.342 44.0248 5.874C43.7608 5.394 43.5208 4.932 43.3048 4.488C43.0888 4.044 42.9148 3.63 42.7828 3.246C42.6508 2.85 42.5848 2.52 42.5848 2.256C42.5848 1.932 42.6808 1.656 42.8728 1.428C43.0768 1.188 43.3528 1.068 43.7008 1.068C43.9288 1.068 44.1748 1.158 44.4388 1.338C44.7028 1.518 44.9728 1.758 45.2488 2.058C45.5368 2.346 45.8188 2.67 46.0948 3.03C46.3828 3.378 46.6468 3.732 46.8868 4.092C47.1388 4.44 47.3608 4.77 47.5528 5.082C47.7568 5.382 47.9188 5.622 48.0388 5.802L50.0188 2.058C50.1028 1.914 50.2168 1.8 50.3608 1.716C50.5048 1.62 50.6608 1.572 50.8288 1.572C51.0808 1.572 51.2908 1.662 51.4588 1.842C51.6388 2.022 51.7288 2.238 51.7288 2.49C51.7288 2.574 51.6748 2.742 51.5668 2.994C51.4588 3.234 51.3148 3.522 51.1348 3.858C50.9668 4.194 50.7808 4.554 50.5768 4.938C50.3728 5.322 50.1748 5.688 49.9828 6.036C49.7908 6.384 49.6168 6.696 49.4608 6.972C49.3168 7.236 49.2148 7.428 49.1548 7.548ZM73.8547 1.05C74.0947 1.05 74.3047 1.14 74.4847 1.32C74.6767 1.5 74.7727 1.71 74.7727 1.95C74.7727 2.178 74.6947 2.376 74.5387 2.544C74.3947 2.712 74.2147 2.814 73.9987 2.85L69.4447 3.534C69.4927 5.298 69.5887 7.062 69.7327 8.826C69.8767 10.578 69.9487 12.336 69.9487 14.1C69.9487 14.34 69.8587 14.55 69.6787 14.73C69.4987 14.91 69.2887 15 69.0487 15C68.6167 15 68.2447 14.85 67.9327 14.55C67.6207 14.238 67.3567 13.842 67.1407 13.362C66.9367 12.882 66.7687 12.348 66.6367 11.76C66.5167 11.16 66.4207 10.566 66.3487 9.978C66.2887 9.39 66.2467 8.844 66.2227 8.34C66.2107 7.824 66.2047 7.416 66.2047 7.116C66.2047 6.588 66.2167 6.066 66.2407 5.55C66.2767 5.022 66.3427 4.5 66.4387 3.984C66.2587 4.008 65.9767 4.056 65.5927 4.128C65.2207 4.188 64.8247 4.254 64.4047 4.326C63.9967 4.386 63.6127 4.44 63.2527 4.488C62.8927 4.536 62.6407 4.56 62.4967 4.56C62.2567 4.56 62.0407 4.47 61.8487 4.29C61.6687 4.11 61.5787 3.9 61.5787 3.66C61.5787 3.444 61.6507 3.252 61.7947 3.084C61.9507 2.904 62.1367 2.796 62.3527 2.76L67.0867 2.058C67.2187 1.806 67.4167 1.596 67.6807 1.428C67.9447 1.248 68.2207 1.158 68.5087 1.158C68.7007 1.158 68.8687 1.212 69.0127 1.32C69.1687 1.428 69.2827 1.566 69.3547 1.734L73.7287 1.068C73.7527 1.068 73.7707 1.068 73.7827 1.068C73.8067 1.056 73.8307 1.05 73.8547 1.05ZM94.6623 12.624C94.9383 12.624 95.1663 12.702 95.3463 12.858C95.5383 13.014 95.6343 13.236 95.6343 13.524C95.6343 13.764 95.5563 13.968 95.4003 14.136C95.2443 14.304 95.0463 14.4 94.8063 14.424L87.5343 14.982C87.4863 14.982 87.4443 14.988 87.4083 15C87.3723 15 87.3303 15 87.2823 15C86.8623 15 86.4963 14.856 86.1843 14.568C85.8723 14.268 85.6083 13.884 85.3923 13.416C85.1883 12.948 85.0203 12.426 84.8883 11.85C84.7683 11.262 84.6723 10.686 84.6003 10.122C84.5403 9.558 84.4983 9.03 84.4743 8.538C84.4503 8.034 84.4383 7.632 84.4383 7.332C84.4383 7.08 84.4443 6.768 84.4563 6.396C84.4683 6.024 84.4983 5.628 84.5463 5.208C84.5943 4.788 84.6603 4.368 84.7443 3.948C84.8403 3.528 84.9663 3.144 85.1223 2.796C85.2903 2.448 85.4883 2.16 85.7163 1.932C85.9563 1.692 86.2443 1.554 86.5803 1.518L93.7983 0.762C94.0623 0.762 94.2903 0.846 94.4823 1.014C94.6863 1.17 94.7883 1.386 94.7883 1.662C94.7883 1.89 94.7103 2.094 94.5543 2.274C94.3983 2.442 94.2063 2.538 93.9783 2.562L87.6783 3.21C87.6903 3.966 87.7143 4.722 87.7503 5.478C87.7863 6.222 87.8343 6.972 87.8943 7.728L92.7003 7.044C92.7243 7.044 92.7423 7.044 92.7543 7.044C92.7783 7.032 92.8023 7.026 92.8263 7.026C93.0663 7.026 93.2763 7.116 93.4563 7.296C93.6363 7.476 93.7263 7.686 93.7263 7.926C93.7263 8.142 93.6483 8.34 93.4923 8.52C93.3483 8.7 93.1683 8.802 92.9523 8.826L88.0023 9.528C88.0383 10.14 88.0683 10.74 88.0923 11.328C88.1283 11.916 88.1583 12.516 88.1823 13.128L94.6623 12.624ZM114.822 0.366C115.05 0.366 115.242 0.431999 115.398 0.563999C115.566 0.696 115.674 0.876 115.722 1.104C115.854 1.752 115.974 2.43 116.082 3.138C116.202 3.834 116.304 4.542 116.388 5.262C116.472 5.982 116.532 6.696 116.568 7.404C116.616 8.112 116.64 8.796 116.64 9.456C116.64 9.744 116.634 10.086 116.622 10.482C116.61 10.866 116.574 11.268 116.514 11.688C116.454 12.096 116.37 12.498 116.262 12.894C116.154 13.29 116.004 13.644 115.812 13.956C115.62 14.268 115.374 14.52 115.074 14.712C114.786 14.904 114.438 15 114.03 15C113.166 15 112.38 14.802 111.672 14.406C110.976 14.01 110.352 13.506 109.8 12.894C109.26 12.27 108.786 11.586 108.378 10.842C107.97 10.086 107.622 9.354 107.334 8.646V14.442C107.334 14.694 107.244 14.904 107.064 15.072C106.896 15.252 106.686 15.342 106.434 15.342C106.194 15.342 105.984 15.252 105.804 15.072C105.624 14.892 105.534 14.682 105.534 14.442V1.716C105.534 1.512 105.6 1.326 105.732 1.158C105.864 0.977999 106.044 0.887999 106.272 0.887999C106.584 0.887999 106.854 0.953999 107.082 1.086C107.322 1.206 107.538 1.368 107.73 1.572C107.922 1.764 108.09 1.98 108.234 2.22C108.39 2.46 108.534 2.7 108.666 2.94C108.834 3.24 108.996 3.57 109.152 3.93C109.32 4.278 109.476 4.632 109.62 4.992C109.776 5.352 109.926 5.712 110.07 6.072C110.226 6.42 110.376 6.75 110.52 7.062C110.58 7.194 110.694 7.44 110.862 7.8C111.03 8.148 111.222 8.55 111.438 9.006C111.654 9.462 111.888 9.936 112.14 10.428C112.392 10.92 112.638 11.376 112.878 11.796C113.13 12.204 113.358 12.54 113.562 12.804C113.766 13.068 113.934 13.2 114.066 13.2C114.234 13.2 114.366 13.032 114.462 12.696C114.57 12.348 114.648 11.952 114.696 11.508C114.756 11.064 114.792 10.638 114.804 10.23C114.828 9.822 114.84 9.546 114.84 9.402C114.84 8.058 114.762 6.72 114.606 5.388C114.462 4.056 114.24 2.736 113.94 1.428C113.928 1.392 113.922 1.338 113.922 1.266C113.922 1.026 114.012 0.815999 114.192 0.635999C114.372 0.455999 114.582 0.366 114.822 0.366ZM135.195 2.814C135.723 2.814 136.287 2.844 136.887 2.904C137.499 2.964 138.105 3.072 138.705 3.228C139.305 3.372 139.881 3.57 140.433 3.822C140.985 4.074 141.471 4.386 141.891 4.758C142.311 5.13 142.647 5.574 142.899 6.09C143.151 6.594 143.277 7.176 143.277 7.836C143.277 8.664 143.085 9.426 142.701 10.122C142.317 10.818 141.825 11.442 141.225 11.994C140.637 12.534 139.977 13.002 139.245 13.398C138.513 13.782 137.799 14.094 137.103 14.334C136.575 14.514 136.041 14.664 135.501 14.784C134.973 14.892 134.439 14.982 133.899 15.054C133.899 15.222 133.893 15.396 133.881 15.576C133.881 15.768 133.851 15.942 133.791 16.098C133.743 16.254 133.659 16.38 133.539 16.476C133.419 16.584 133.239 16.638 132.999 16.638C132.579 16.638 132.213 16.482 131.901 16.17C131.601 15.87 131.373 15.54 131.217 15.18H131.073C130.917 15.18 130.749 15.174 130.569 15.162C130.401 15.15 130.245 15.114 130.101 15.054C129.957 14.994 129.837 14.904 129.741 14.784C129.645 14.664 129.597 14.496 129.597 14.28C129.597 13.956 129.693 13.722 129.885 13.578C130.089 13.434 130.341 13.362 130.641 13.362C130.461 12.534 130.335 11.7 130.263 10.86C130.191 10.02 130.155 9.18 130.155 8.34C130.155 7.824 130.167 7.308 130.191 6.792C130.227 6.276 130.287 5.76 130.371 5.244C130.239 5.28 130.011 5.346 129.687 5.442C129.375 5.526 129.051 5.616 128.715 5.712C128.379 5.808 128.067 5.892 127.779 5.964C127.503 6.036 127.329 6.072 127.257 6.072C127.005 6.072 126.789 5.988 126.609 5.82C126.429 5.64 126.339 5.424 126.339 5.172C126.339 4.968 126.393 4.794 126.501 4.65C126.621 4.506 126.777 4.398 126.969 4.326C127.593 4.086 128.241 3.888 128.913 3.732C129.585 3.564 130.245 3.414 130.893 3.282C130.941 3.066 131.013 2.85 131.109 2.634C131.205 2.418 131.319 2.226 131.451 2.058C131.595 1.89 131.751 1.758 131.919 1.662C132.099 1.554 132.285 1.5 132.477 1.5C132.669 1.5 132.819 1.554 132.927 1.662C133.047 1.758 133.137 1.878 133.197 2.022C133.257 2.166 133.299 2.322 133.323 2.49C133.347 2.646 133.365 2.784 133.377 2.904C133.689 2.88 133.995 2.862 134.295 2.85C134.595 2.826 134.895 2.814 135.195 2.814ZM135.105 4.614C134.865 4.614 134.601 4.626 134.313 4.65C134.025 4.662 133.725 4.68 133.413 4.704C133.473 6.12 133.545 7.536 133.629 8.952C133.713 10.368 133.785 11.784 133.845 13.2C134.505 13.08 135.183 12.87 135.879 12.57C136.587 12.27 137.229 11.892 137.805 11.436C138.393 10.968 138.873 10.434 139.245 9.834C139.617 9.234 139.803 8.568 139.803 7.836C139.803 7.188 139.653 6.66 139.353 6.252C139.065 5.832 138.693 5.502 138.237 5.262C137.781 5.022 137.277 4.854 136.725 4.758C136.173 4.662 135.633 4.614 135.105 4.614Z" fill="#FF986F"/>
</svg>
                </section>
            )
    
        default:
            return (
                <section className={styles.topBar}>
                    <div className={styles.topBarBackground}></div>
                    <h1 className={styles.header}>{title}</h1>
                    <Back />
                </section>
            )
    }
}

export default TopBar;