import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google popup login
    const googlePopupLogin = () => {
        return signInWithPopup(auth, provider)
     }
    
    const LogOut = () => {
        return signOut(auth);
          
    }
    
    
    
  // onAuthStateChanged part
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('auth state change', currentUser);
        setUser(currentUser);
        // setLoading(false);
    });

    return () =>{
        unsubscribe();
    }

}, [])

    const authInfo = {
        user ,signIn ,signUp,LogOut,googlePopupLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;