import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(true);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // authentication
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //use name for authentication registration
  const userName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // with popup authentication
  const signInPopGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInPopGit = () => {
    return signInWithPopup(auth, gitProvider);
  };
  // signOut
  const signOutUser = () => {
    return signOut(auth);
  };

  // hold user
  useEffect(() => {
    setLoader(true);
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  // const user = { displayName: "delwer hossain" };
  const authInfo = {
    user,
    loader,
    createUser,
    userName,
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
