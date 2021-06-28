import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAGQmmkj-aZcJp0PHwuV9oWVdZcmFuvkME",
    authDomain: "unichat-cdf48.firebaseapp.com",
    projectId: "unichat-cdf48",
    storageBucket: "unichat-cdf48.appspot.com",
    messagingSenderId: "703088010548",
    appId: "1:703088010548:web:4038b53a6c2087637eb161"
  }).auth();