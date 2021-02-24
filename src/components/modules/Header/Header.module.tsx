import React from "react";

import styles from "./Header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className={styles.logo}
            />
          </a>
        </Link>

        
      </div>
      <div className={styles.userActionContainer}>
          <Link href="/signin">
            <a className={styles.userLink}>log in</a>
          </Link>
          <Link href="/signup">
            <a className={styles.userLink}>sign up</a>
          </Link>
        </div>
    </header>
  );
};

export default Header;
