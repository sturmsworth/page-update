import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEJr7fTwArlM6hGWkO8i7cRywjwMfTxpg",
  authDomain: "page-application-c791e.firebaseapp.com",
  databaseURL: "https://page-application-c791e.firebaseio.com",
  projectId: "page-application-c791e",
  storageBucket: "page-application-c791e.appspot.com",
  messagingSenderId: "382358287311",
  appId: "1:382358287311:web:45184afbb7caaadd",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const storageRef = storage.ref();

export { firebase, db, auth, storage, storageRef, firebaseConfig };
