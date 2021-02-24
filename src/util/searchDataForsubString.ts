import { IDataRestaurant } from "@projecttypes/restaurant";

const searchDataForsubString = (
  data: IDataRestaurant[],
  searchTerm: string
): IDataRestaurant[] => {
  const finalData = data.filter((restaurant) =>
    restaurant.name
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchTerm.toLowerCase())
  );
  return finalData;
};

export default searchDataForsubString;
