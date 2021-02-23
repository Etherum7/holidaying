import Search from "@module/Search/Search.module";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Holidaying | A platform to discover and book trips
          by influencers and locals
        </title>
        <link rel="icon" href="/favicon.ico" />
        // Add this wherever you render your code...
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Holidaying</h1>
        <Search />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
