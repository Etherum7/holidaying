import {IDataRestaurant} from '@projecttypes/restaurant';

const searchDataForsubString = (
  data: IDataRestaurant[],
  searchterm: string
): IDataRestaurant[] => {
  const finalData = data.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchterm)
  );
  return finalData;
};

export default searchDataForsubString;
