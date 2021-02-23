import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import axios from "axios";
import firebase from "@config/firebase";

import Search from "@module/Search/Search.module";
import CardContainer from "@module/CardContainer/CardContainer.module";

import styles from "../styles/Home.module.scss";

import { IDataRestaurant } from "@projecttypes/restaurant";

const db = firebase.firestore();

interface IHomeProps {
  topRestaurants: IDataRestaurant[];
}
const Home: React.FC<IHomeProps> = ({ topRestaurants }) => {
  const [data, setData] = useState<IDataRestaurant[]>([]);

  useEffect(() => {
    setData(topRestaurants);
  }, []);
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
        <Search
          handleSearchData={(searchData) =>
            setData(searchData)
          }
        />
        <CardContainer data={data} />
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
export const getStaticProps: GetStaticProps = async (
  context
) => {
  const collectionRef = db.collection("restaurants");
  const topRestaurants: IDataRestaurant[] = [];
  await collectionRef
    .orderBy("rating", "desc")
    .limit(4)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(
        (
          doc: firebase.firestore.QueryDocumentSnapshot<IDataRestaurant>
        ) => topRestaurants.push(doc.data())
      );
    })
    .catch((err) => {
      throw new Error(err);
    });
  return { props: { topRestaurants: topRestaurants } };
};
export default Home;
