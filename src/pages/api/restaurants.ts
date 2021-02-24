import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "@config/firebase";

import searchDataForsubString from "@util/searchDataForsubString";
type response = {
  data: firebase.firestore.DocumentData;
};
const restaurants = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let { searchTerm } = req.query;
  if (typeof searchTerm !== "string") {
    searchTerm = searchTerm[0];
  }
  const db = firebase.firestore();
  const collectionRef = db.collection("restaurants");
  const result = [];
  //as firebase dont support querying by substring we can use algolia or imort data client side as it is small
  await collectionRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

    })
    .catch((err) => {
      throw new Error(`error fetching documents ${err}`);
    });

  res.status(200).json({
    data: searchDataForsubString(result, searchTerm),
  });
};

export default restaurants;
