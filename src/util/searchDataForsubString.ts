import { IDataRestaurant } from "@projecttypes/restaurant";

const searchDataForsubString = (
  data: IDataRestaurant[],
  searchTerm: string
): IDataRestaurant[] => {
  console.log(searchTerm);
  const finalData = data.filter((restaurant) =>
    restaurant.name
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchTerm)
  );
  return finalData;
};

export default searchDataForsubString;
