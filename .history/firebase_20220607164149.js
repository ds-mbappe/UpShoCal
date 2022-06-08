// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpCvMCaB2tkeKdH8dy2SXQ5jNREutBzhY",
  authDomain: "upshocal.firebaseapp.com",
  projectId: "upshocal",
  storageBucket: "upshocal.appspot.com",
  messagingSenderId: "798673567872",
  appId: "1:798673567872:web:02d141c5fadb55a9a16665",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
