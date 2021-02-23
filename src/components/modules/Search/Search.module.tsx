import React, { useState } from "react";
import axios from "axios";

import styles from "./Search.module.scss";

import { IDataRestaurant } from "@projecttypes/restaurant";

interface ISearchProps {
  handleSearchData: (data: IDataRestaurant[]) => void;
}
const Search = ({ handleSearchData }: ISearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = async (searchTerm: string) => {
    const res = await axios.get(
      `/api/restaurants?searchTerm=${searchTerm}`
    );
    console.log(res.data);
    //as we name it under data
    handleSearchData(res.data.data);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={(e) => {
          handleChange(e.target.value);
          setInputValue(() => {
            return e.target.value;
          });
        }}
        placeholder="Search Your Favourite Restaurants"
      />
      <button className={styles.searchButton}>
        <svg className="searchIcon">
          <use xlinkHref="/assets/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </div>
  );
};

export default Search;
