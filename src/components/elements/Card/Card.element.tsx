import React from "react";

import { IDataRestaurant } from "@projecttypes/restaurant";
import styles from "./card.module.scss";
interface ICardProps {
  restaurant: IDataRestaurant;
}
const Card: React.FC<ICardProps> = ({ restaurant }) => {
  const handleName = (
    name: string,
    max: number
  ): string => {
    if (name.length > max) {
      name = name.slice(0, max);
      return name + "...";
    } else return name;
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardNameAndRating}>
        <div className={styles.cardName}>
          {handleName(restaurant.name, 14)}
        </div>
        <div className={styles.cardRating}>
          {restaurant.rating}
        </div>
      </div>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={restaurant.imageUrl}
          alt="Restaurant Image"
        />
      </div>
      <div className={styles.cardDesc}>
        {handleName(restaurant.description, 60)}
      </div>
    </div>
  );
};

export default Card;
