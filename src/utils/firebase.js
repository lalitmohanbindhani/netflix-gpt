// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYC0VKzWYshZC7WhOiLZkKGPEq60_XbAk",
  authDomain: "netflixgpt-5c266.firebaseapp.com",
  projectId: "netflixgpt-5c266",
  storageBucket: "netflixgpt-5c266.firebasestorage.app",
  messagingSenderId: "208642494991",
  appId: "1:208642494991:web:64b847f340540adaba497a",
  measurementId: "G-SQ8RRDBFL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
