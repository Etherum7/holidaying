import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./Search.module.scss";

import { IDataRestaurant } from "@projecttypes/restaurant";

interface ISearchProps {
  handleSearchData: (data: IDataRestaurant[]) => void;
  inputFocused: (focusState: boolean) => void;
  handleLoadingState: (loadingState: boolean) => void;
  handleSearchTerm: (searchTerm: string) => void;
  top4Restaurants: IDataRestaurant[];
}
const Search = ({
  handleSearchData,
  inputFocused,
  handleLoadingState,
  handleSearchTerm,
  top4Restaurants,
}: ISearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  let cancelToken;
  const handleChange = async (searchTerm: string) => {
    handleSearchTerm(searchTerm);

    if (searchTerm === "") {
      handleSearchData(top4Restaurants);
      return;
    }
    handleLoadingState(true);
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel(
        "Operation canceled due to new request."
      );
    }
    cancelToken = axios.CancelToken.source();
    try {
      const res = await axios.get(
        `/api/restaurants?searchTerm=${searchTerm}`,
        { cancelToken: cancelToken.token }
      );

      handleLoadingState(false);
      //as we name it under data
      handleSearchData(res.data.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div
      className={`${styles.searchContainer} ${styles.animated} ${styles.bounceInUp}`}>
      <label htmlFor="search" style={{ display: "none" }}>
        search all restaurants
      </label>
      <input
        id="search"
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
        aria-label="Search Restaurants"
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
