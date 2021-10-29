import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "********************************",
  authDomain: "******",
  projectId: "*-*-t",
  storageBucket: "*******",
  messagingSenderId: "******",
  appId: "1:***********:web:**********",
  measurementId: "G-********",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
