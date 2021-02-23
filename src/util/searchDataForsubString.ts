interface IDataRestaurant {
  imageUrl: string;
  rating: string;
  description: string;
  name: string;
}
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
