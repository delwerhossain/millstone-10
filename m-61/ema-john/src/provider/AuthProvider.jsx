import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const createUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signInPopGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  const signInPopGit = () => {
    signInWithPopup(auth, gitProvider);
  };
  const signOutUser = () => {
    signOut(auth);
  };
  const user = { displayName: "delwer hossain" };
  const authInfo = {
    user,
    createUser,
    signInUser,
    signInPopGit,
    signInPopGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
