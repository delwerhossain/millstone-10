import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google popup login
    const googlePopupLogin = () => {
        return signInWithPopup(auth, googleProvider)
     }
    // git popup login
    const gitPopupLogin = () => {
        return signInWithPopup(auth, gitProvider)
     }
    
    const LogOut = () => {
        return signOut(auth);
          
    }
    
    
    
  // onAuthStateChanged part
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('auth state change', currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () =>{
        unsubscribe();
    }

}, [])

    const authInfo = {
        user,loading ,signIn ,signUp,LogOut,googlePopupLogin,gitPopupLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;