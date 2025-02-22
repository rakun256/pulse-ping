import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAtffVbiYRhvLSgobpmXjpHvuKWifkxxJs",
  
    authDomain: "pulseping256.firebaseapp.com",
  
    projectId: "pulseping256",
  
    storageBucket: "pulseping256.firebasestorage.app",
  
    messagingSenderId: "514109674516",
  
    appId: "1:514109674516:web:d190777e08a25cb3af8301",
  
    measurementId: "G-ENCN1TQGVC"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
