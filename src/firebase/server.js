// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import the necessary function for Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqv4mYloZkohRwS-m371iQAWnvRVwOq_o",
  authDomain: "skillsync-4e698.firebaseapp.com",
  projectId: "skillsync-4e698",
  storageBucket: "skillsync-4e698.appspot.com",
  messagingSenderId: "411461119555",
  appId: "1:411461119555:web:5694c8248c19cb6ffaaef6",
  measurementId: "G-D804XFW0DT",
  databaseURL: "https://skillsync-4e698-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(); // Initialize Firestore without passing the app object

export { app, db };
