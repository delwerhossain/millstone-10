// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAdPxm7BFdfEQk4XCyzciS2LE6P4JhkCc",
  authDomain: "practice-firebase-gg.firebaseapp.com",
  projectId: "practice-firebase-gg",
  storageBucket: "practice-firebase-gg.appspot.com",
  messagingSenderId: "729417164706",
  appId: "1:729417164706:web:392315e741ee8c7d49b4fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;