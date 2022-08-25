// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR-uu0GBqzS5p5wL1GOU0-ljV0DHeK1RQ",
  authDomain: "anisul-islam-courses.firebaseapp.com",
  projectId: "anisul-islam-courses",
  storageBucket: "anisul-islam-courses.appspot.com",
  messagingSenderId: "310104970814",
  appId: "1:310104970814:web:0cf2aa99f5b22c607ce36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;