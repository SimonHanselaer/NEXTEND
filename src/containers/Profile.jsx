import React, { useState, useEffect } from 'react';
import withAuthentication from '../components/auth/WithAuthentication';
import { observer, inject } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import styles from './Profile.module.css';
import stylesTypo from '../styles/typo.module.css';
import stylesUI from '../styles/ui.module.css';
import TopBar from "./../components/TopBar.jsx";

const Profile = ({ uiStore, databaseStore }) => {
  let history = useHistory();
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(false);
  // const [edit, setEdit] = useState(true);
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState('');
  const [city, setCity] = useState('');
  const [regio, setRegio] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [bio, setBio] = useState('');
  const [challenges, setChallenges] = useState('');

  const handleLogout = () => {
    uiStore.logout();
    history.push('/login');
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let props = {
      username: username,
      city: city,
      regio: regio,
      age: age,
      gender: gender,
      language: language,
      bio: bio
    };
    databaseStore.updateUser(props);
    setEdit(false);
  };

  useEffect(() => {
    const getInfo = async () => {
      let info = await databaseStore.getRegio(localStorage.uid);
      let userChallenges = await databaseStore.getChallengesUser(
        localStorage.uid
      );
      setStatus(true);
      setUsername(info.Username);
      setPhoto(info.Photo);
      setCity(info.City);
      setRegio(info.Regio);
      setAge(info.Age);
      setGender(info.Gender);
      setLanguage(info.Language);
      setBio(info.Bio);
      setChallenges(userChallenges);
    };

    // console.log("test");
    getInfo();
  }, [databaseStore]);

  if (edit === true) {
    if (status) {
      return (
        <>
          <TopBar title="Editing" />
          {/* <h1>Editing</h1> */}
          <div className={stylesUI.contentContainer}>
            <form onSubmit={handleSubmit}>
              <h2 className={styles.headerTitle}>Algemene gegevens</h2>
              {/* 16 bold */}
              <div className={stylesUI.flexColumn}>
                <label htmlFor="username" className={styles.inputTitle}>
                  Naam
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Jouw naam"
                  className={stylesTypo.input}
                  defaultValue={username !== '' ? username : ''}
                  onChange={e =>
                    e.currentTarget.value !== ''
                      ? setUsername(e.currentTarget.value)
                      : setUsername("")
                  }
                />
              </div>
              <div className={stylesUI.flexColumn}>
                <label htmlFor="city" className={styles.inputTitle}>
                  Stad
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Kortrijk"
                  className={stylesTypo.input}
                  defaultValue={city !== '' ? city : ''}
                  onChange={e =>
                    e.currentTarget.value.trim() !== ''
                       ? setCity(e.currentTarget.value)
                      : setCity("")
                       
                  }
                />
              </div>
              <div>
                <p className={styles.inputTitle}>Regio</p>
                <div className={styles.regioGrid}>
                  <div>
                    {regio === 'VL' ? (
                      <input
                        id="VL"
                        type="radio"
                        name="regio"
                        value="VL"
                        defaultChecked
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="VL"
                        type="radio"
                        name="regio"
                        value="VL"
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="VL" className={styles.inputLabel}>
                      Vlaanderen
                    </label>
                  </div>
                  <div>
                    {regio === 'WL' ? (
                      <input
                        id="WL"
                        type="radio"
                        name="regio"
                        value="WL"
                        defaultChecked
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="WL"
                        type="radio"
                        name="regio"
                        value="WL"
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="WL" className={styles.inputLabel}>
                      Wallonië
                    </label>
                  </div>
                  <div>
                    {regio === 'FRK' ? (
                      <input
                        id="FRK"
                        type="radio"
                        name="regio"
                        value="FRK"
                        defaultChecked
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="FRK"
                        type="radio"
                        name="regio"
                        value="FRK"
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="FRK" className={styles.inputLabel}>
                      Frankrijk
                    </label>
                  </div>
                  <div>
                    {regio === 'Ander' ? (
                      <input
                        id="Ander"
                        type="radio"
                        name="regio"
                        value="Ander"
                        defaultChecked
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="Ander"
                        type="radio"
                        name="regio"
                        value="Ander"
                        onClick={e => setRegio(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="Ander" className={styles.inputLabel}>
                      Ander
                    </label>
                  </div>
                </div>
              </div>
              <div className={stylesUI.flexColumn}>
                <label htmlFor="age" className={styles.inputTitle}>
                  Leeftijd
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="25"
                  className={stylesTypo.input}
                  defaultValue={age !== '' ? age : ''}
                  onChange={e =>
                    e.currentTarget.value !== ''
                      ? setAge(e.currentTarget.value)
                      : setAge("")
                  }
                />
              </div>
              <div>
                <p className={styles.inputTitle}>Geslacht</p>
                <div className={styles.buttonInputRow}>
                  <div>
                    {gender === 'M' ? (
                      <input
                        id="M"
                        type="radio"
                        name="gender"
                        value="M"
                        defaultChecked
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="M"
                        type="radio"
                        name="gender"
                        value="M"
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="M" className={styles.inputLabel}>
                      M
                    </label>
                  </div>
                  <div>
                    {gender === 'V' ? (
                      <input
                        id="V"
                        type="radio"
                        name="gender"
                        value="V"
                        defaultChecked
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="V"
                        type="radio"
                        name="gender"
                        value="V"
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="V" className={styles.inputLabel}>
                      V
                    </label>
                  </div>
                  <div>
                    {gender === 'X' ? (
                      <input
                        id="X"
                        type="radio"
                        name="gender"
                        value="X"
                        defaultChecked
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="X"
                        type="radio"
                        name="gender"
                        value="X"
                        onClick={e => setGender(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="X" className={styles.inputLabel}>
                      X
                    </label>
                  </div>
                </div>
                <div>
                  {gender === 'geen' ? (
                    <input
                      id="geen"
                      type="radio"
                      name="gender"
                      value="geen"
                      defaultChecked
                      onClick={e =>
                        e.currentTarget.value !== ''
                          ? setGender(e.currentTarget.value)
                          : ''
                      }
                    />
                  ) : (
                    <input
                      id="geen"
                      type="radio"
                      name="gender"
                      value="geen"
                      onClick={e =>
                        e.currentTarget.value !== ''
                          ? setGender(e.currentTarget.value)
                          : ''
                      }
                    />
                  )}
                  <label htmlFor="geen" className={styles.inputLabel}>
                    Zeg ik liever niet
                  </label>
                </div>
              </div>
              <div>
                <p className={styles.inputTitle}>Taal</p>
                <div className={styles.buttonInputRow}>
                  <div>
                    {language === 'NL' ? (
                      <input
                        id="NL"
                        type="radio"
                        name="language"
                        value="NL"
                        defaultChecked
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="NL"
                        type="radio"
                        name="language"
                        value="NL"
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="NL" className={styles.inputLabel}>
                      NL
                    </label>
                  </div>
                  <div>
                    {language === 'FR' ? (
                      <input
                        id="FR"
                        type="radio"
                        name="language"
                        value="FR"
                        defaultChecked
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="FR"
                        type="radio"
                        name="language"
                        value="FR"
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="FR" className={styles.inputLabel}>
                      FR
                    </label>
                  </div>
                  <div>
                    {language === 'EN' ? (
                      <input
                        id="EN"
                        type="radio"
                        name="language"
                        value="EN"
                        defaultChecked
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    ) : (
                      <input
                        id="EN"
                        type="radio"
                        name="language"
                        value="EN"
                        onClick={e => setLanguage(e.currentTarget.value)}
                      />
                    )}
                    <label htmlFor="EN" className={styles.inputLabel}>
                      EN
                    </label>
                  </div>
                </div>
              </div>
              <div className={stylesUI.flexColumn}>
                <label htmlFor="bio" className={styles.inputTitle}>
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  cols="50"
                  rows="5"
                  className={stylesTypo.input}
                  defaultValue={bio !== '' ? bio : 'Voeg hier een bio toe'}
                  onChange={e =>
                    e.currentTarget.value !== ''
                      ? setBio(e.currentTarget.value)
                      : setBio("")
                  }
                ></textarea>
              </div>
              <button type="submit" className={stylesUI.button1}>
                Opslaan
              </button>
            </form>
          </div>
        </>
      );
    } else {
      return <p>Loading</p>;
    }
  } else {
    if (status) {
      return (
        <>
          <div className={styles.containerHeader}>
            {/* <h1>Profile</h1> */}
            <div className={styles.header}>
              <div>
                <h2 className="accent">{username}</h2>
                <p className="small">
                  {city} -{' '}
                  {regio === 'VL'
                    ? 'Vlaanderen'
                    : regio === 'WL'
                    ? 'Wallonië'
                    : regio === 'FR'
                    ? 'Frankrijk'
                    : null}
                </p>
              </div>
              <button onClick={() => handleClickEdit()}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18.25V22H6.75L17.81 10.94L14.06 7.19L3 18.25ZM20.71 8.04C20.8972 7.85316 21.0024 7.59951 21.0024 7.335C21.0024 7.07049 20.8972 6.81685 20.71 6.63L18.37 4.29C18.1832 4.10277 17.9295 3.99756 17.665 3.99756C17.4005 3.99756 17.1468 4.10277 16.96 4.29L15.13 6.12L18.88 9.87L20.71 8.04Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="3"
                      y1="3.99756"
                      x2="21.0024"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFC371" />
                      <stop offset="1" stopColor="#FF5F6D" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <img
              src={photo}
              alt="profielfoto"
              width="110"
              height="110"
              align="right"
            />
          </div>
          <div className={styles.container}>
            <div className="flexRow">
              <div className={styles.info}>
                <p className="accent">{age !== "" ? age : "-"}</p>
                <p className="small">Leeftijd</p>
              </div>
              <div className={styles.info}>
                <p className="accent">{gender === "geen" ? "-" : gender}</p>
                <p className="small">Geslacht</p>
              </div>
              <div className={styles.info}>
                <p className="accent">{language}</p>
                <p className="small">Taal</p>
              </div>
            </div>
            <div className={styles.shortline}></div>
            <div>
              <h3 className={styles.titles}>Over</h3>
              {console.log(bio)}
              <p className="small">{bio !== "" ? bio : "Hier komt je bio."}</p>
            </div>
            <div>
              <h3 className={styles.titles}>Gedane uitdagingen</h3>
              <ul>
                {challenges ? (
                  Object.keys(challenges).map(key => {
                    return (
                      <li key={key} className={styles.challengeButton}>
                        <span className={styles.challengeButtonSpan}>
                          {challenges[key].naam}
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </ul>
            </div>
            <button onClick={() => handleLogout()}>Afmelden</button>
          </div>
        </>
      );
    } else {
      return <p>Loading</p>;
    }
  }
};

export default inject(
  `uiStore`,
  `databaseStore`
)(withAuthentication(observer(Profile)));
