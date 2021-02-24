import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "holidaying-890ee.firebaseapp.com",
  projectId: "holidaying-890ee",
  storageBucket: "holidaying-890ee.appspot.com",
  messagingSenderId: "338170941154",
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
