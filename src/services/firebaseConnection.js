// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComGSmtN2ihBI21P9zDzSq_x79XzKgBSc",
  authDomain: "linkapplication-b781a.firebaseapp.com",
  projectId: "linkapplication-b781a",
  storageBucket: "linkapplication-b781a.appspot.com",
  messagingSenderId: "321214168654",
  appId: "1:321214168654:web:d2171a3907f3b1faefcd1f",
  measurementId: "G-WS1ZBQR01T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore(app);
const auth = getAuth(app);

export {db, auth};