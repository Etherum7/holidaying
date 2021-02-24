import React, { useState, useRef } from "react";
import axios from "axios";
import firebase from "@config/firebase";
import styles from "./Search.module.scss";

import { IDataRestaurant } from "@projecttypes/restaurant";

interface ISearchProps {
  handleSearchData: (data: IDataRestaurant[]) => void;
  inputFocused: (focusState: boolean) => void;
  handleLoadingState: (loadingState: boolean) => void;
  handleSearchTerm: (searchTerm: string) => void;
}
const Search = ({
  handleSearchData,
  inputFocused,
  handleLoadingState,
  handleSearchTerm,
}: ISearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleChange = async (searchTerm: string) => {
    handleSearchTerm(searchTerm);

    handleLoadingState(true);
    if (searchTerm === "") {
      const db = firebase.firestore();
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
      handleLoadingState(false);
      //as we name it under data
      handleSearchData(topRestaurants);
      return;
    }
    const res = await axios.get(
      `/api/restaurants?searchTerm=${searchTerm}`
    );

    handleLoadingState(false);
    //as we name it under data
    handleSearchData(res.data.data);
  };

  return (
    <div
      className={`${styles.searchContainer} ${styles.animated} ${styles.bounceInUp}`}>
      <input
        type="text"
        name="search"
        value={inputValue}
        className={styles.searchBox}
        autoComplete="off"
        ref={inputRef}
        onChange={(e) => {
          handleChange(e.target.value);
          setInputValue(() => {
            return e.target.value;
          });
        }}
        onFocus={() => {
          inputFocused(true);
        }}
        onBlur={() => {
          inputFocused(false);
        }}
        placeholder="Search Your Favourite Restaurants..."
      />
      <button
        className={styles.searchButton}
        onClick={() => {
          inputRef.current.focus();
        }}>
        <svg className={styles.searchIcon}>
          <use xlinkHref="/assets/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </div>
  );
};

export default Search;
