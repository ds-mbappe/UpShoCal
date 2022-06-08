import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpCvMCaB2tkeKdH8dy2SXQ5jNREutBzhY",
  authDomain: "upshocal.firebaseapp.com",
  projectId: "upshocal",
  storageBucket: "upshocal.appspot.com",
  messagingSenderId: "798673567872",
  appId: "1:798673567872:web:02d141c5fadb55a9a16665",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();

export const firebaseFirestore = firebase.firestore();