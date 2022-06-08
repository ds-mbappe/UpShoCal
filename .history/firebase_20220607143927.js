import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

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
