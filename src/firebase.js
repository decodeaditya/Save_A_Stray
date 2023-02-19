// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt2Um8VEVQ479bBpdKC1VeRLJoGXtLYMg",
  authDomain: "save-a-stray-a1ba3.firebaseapp.com",
  projectId: "save-a-stray-a1ba3",
  storageBucket: "save-a-stray-a1ba3.appspot.com",
  messagingSenderId: "912736256684",
  appId: "1:912736256684:web:ff1f47ffe004511dd7d509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()