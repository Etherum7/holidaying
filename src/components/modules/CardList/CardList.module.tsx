import React from "react";

import Card from "@element/Card/Card.element";
import { IDataRestaurant } from "@projecttypes/restaurant";

import styles from "./CardList.module.scss";
interface ICardListProps {
  data: IDataRestaurant[];
}

const CardList: React.FC<ICardListProps> = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map((restaurant, index) => {
        return <Card key={index} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default CardList;
