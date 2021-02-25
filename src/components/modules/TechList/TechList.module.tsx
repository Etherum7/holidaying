import React from 'react'
import styles from './TechList.module.scss';

interface ITechListProps{
    inputFocused:boolean;
}
const TechList = ({inputFocused}:ITechListProps) => {
    return (
        <div
        className={
          inputFocused
            ? `${styles.siteDescription} ${styles.hideSiteDesc}`
            : `${styles.siteDescription}`
        }>
        <h3 className={styles.siteDescriptionHeader}>
          {" "}
          This site uses following technologies
        </h3>
        <ul className={styles.techList}>
          <li className={styles.techListItem}>
            <img
              src="/assets/react.png"
              className={styles.techImg}
              alt="ReactLogo"
            />
            <div className={styles.techUse}>
              For UI Library
            </div>
          </li>
          <li className={styles.techListItem}>
            <img
              src="/assets/next.png"
              className={styles.techImg}
              alt="NextLogo"
            />
            <div className={styles.techUse}>
              used as Framework
            </div>
          </li>
          <li className={styles.techListItem}>
            <img
              src="/assets/typescript.png"
              className={styles.techImg}
              alt="TSLogo"
            />
            <div className={styles.techUse}>
              used as Language
            </div>
          </li>
          <li className={styles.techListItem}>
            <img
              src="/assets/sass.png"
              className={styles.techImg}
              alt="SassLogo"
            />
            <div className={styles.techUse}>
              used as CSS Preprocessor
            </div>
          </li>

          <li className={styles.techListItem}>
            <img
              src="/assets/firebase.png"
              className={styles.techImg}
              alt="FIREBASELogo"
            />
            <div className={styles.techUse}>
              used as Database
            </div>
          </li>
          <li className={styles.techListItem}>
            <img
              src="/assets/github.png"
              className={styles.techImg}
              alt="GITHUBLogo"
            />
            <div className={styles.techUse}>
              used for VC and RM
            </div>
          </li>
          <li className={styles.techListItem}>
            <img
              src="/assets/vercel.png"
              className={styles.techImg}
              alt="VercelLogo"
            />
            <div className={styles.techUse}>
              used for Deployment
            </div>
          </li>
        </ul>
      </div>

    )
}

export default TechList
