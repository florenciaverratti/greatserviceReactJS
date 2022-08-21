import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA6V4A5ERa0h5lHvEB8jgo0dJ_7OGr_plc",
  authDomain: "great-service-cc6e6.firebaseapp.com",
  projectId: "great-service-cc6e6",
  storageBucket: "great-service-cc6e6.appspot.com",
  messagingSenderId: "457950895306",
  appId: "1:457950895306:web:25a45a8badaf9306062833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app)