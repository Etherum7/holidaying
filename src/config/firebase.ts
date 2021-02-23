import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2_l3lM-DRiFnUuSNOeaJNTVfD5qXP9bQ",
  authDomain: "holidaying-890ee.firebaseapp.com",
  projectId: "holidaying-890ee",
  storageBucket: "holidaying-890ee.appspot.com",
  messagingSenderId: "338170941154",
  appId: "1:338170941154:web:ff48b5ef87ed52b02758bb",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
