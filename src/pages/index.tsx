import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import firebase from "@config/firebase";

import Search from "@module/Search/Search.module";
import CardList from "@module/CardList/CardList.module";
import Loader from "@element/Loader/Loader.element";
import TechList from "@module/TechList/TechList.module";

import styles from "../styles/Home.module.scss";

import { IDataRestaurant } from "@projecttypes/restaurant";

const db = firebase.firestore();

interface IHomeProps {
  topRestaurants: IDataRestaurant[];
}
const Home: React.FC<IHomeProps> = ({ topRestaurants }) => {
  const [top4Restaurants, setTop4Restaurants] = useState<
    IDataRestaurant[]
  >();
  const [data, setData] = useState<IDataRestaurant[]>([]);
  const [inputFocused, setInputFoused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setTop4Restaurants(topRestaurants);
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
        <h1
          className={
            inputFocused
              ? `${styles.title} ${styles.animated} ${styles.bounceOutRight} `
              : `${styles.title} ${styles.animatedBounceInLeft} `
          }>
          Holidaying
        </h1>
        <h4
          className={
            inputFocused
              ? `${styles.subTitle} ${styles.animated} ${styles.bounceOutLeft}`
              : `${styles.subTitle} ${styles.animated} ${styles.bounceInRight}`
          }>
          Jobs fill your pockets, adventures fill your soul.
        </h4>
        <Search
          handleSearchTerm={(searchTerm: string) =>
            setSearchTerm(searchTerm)
          }
          handleSearchData={(searchData) =>
            setData(searchData)
          }
          handleLoadingState={(loadingState) => {
            setLoading(loadingState);
          }}
          inputFocused={(value) => {
            setInputFoused(value);
          }}
          top4Restaurants={top4Restaurants}
        />
        <TechList inputFocused={inputFocused} />

        {loading ? (
          <Loader />
        ) : (
          <>
            {inputFocused ? (
              <h1
                className={`${styles.topRestaurants}  ${styles.slideInUp}`}>
                {searchTerm === "" ? (
                  <>
                    Our Top Restaurants{" "}
                    <span
                      className={styles.emojiSavourFood}>
                      &#x1F60b;
                    </span>
                  </>
                ) : (
                  <>
                    Restaurants which have "{searchTerm}" in
                    name{" "}
                    <span
                      className={styles.emojiSavourFood}>
                      {data.length === 0 ? (
                        <>&#x1F614;</>
                      ) : (
                        <>&#x1F60b;</>
                      )}
                    </span>
                  </>
                )}
              </h1>
            ) : (
              ""
            )}
            {inputFocused ? (
              searchTerm === "" ? (
                <CardList data={top4Restaurants} />
              ) : (
                <>
                  {data.length !== 0 ? (
                    <CardList data={data} />
                  ) : (
                    <h1 className={styles.msgNoData}>
                      Sorry No Restaurant Found in our small
                      database of 10 restaurants . But we
                      are scaling it up Do come back later
                    </h1>
                  )}
                </>
              )
            ) : (
              ""
            )}
          </>
        )}
      </main>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
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
