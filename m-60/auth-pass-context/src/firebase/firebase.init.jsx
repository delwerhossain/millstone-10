// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGnj-5nrzOFO4RrwDxDrgRVNSgv6OXD1o",
  authDomain: "auth-pass-context.firebaseapp.com",
  projectId: "auth-pass-context",
  storageBucket: "auth-pass-context.appspot.com",
  messagingSenderId: "941429443520",
  appId: "1:941429443520:web:aed655f9054d4f49e09625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;