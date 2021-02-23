import React from "react";

import { IDataRestaurant } from "@projecttypes/restaurant";
interface ICardContainerProps {
  data: IDataRestaurant[];
}

const CardContainer: React.FC<ICardContainerProps> = ({
  data,
}) => {
  return (
    <div>
      {data.map((restaurant, index) => {
        return (
          <ul key={index}>
            <li>{restaurant.name}</li>
            <li>{restaurant.description}</li>
            <li>{restaurant.rating}</li>
            <li>
              <img src={restaurant.imageUrl}></img>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default CardContainer;
