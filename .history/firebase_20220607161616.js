// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "@firebase/firestore";
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
const app = initializeApp(firebaseConfig);

export default app;
