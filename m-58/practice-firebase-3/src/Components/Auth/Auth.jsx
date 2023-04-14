import React from "react";
import app from "../../firebase/firebase.config";
import { getApp, getApps, GoogleAuthProvider } from "firebase/app";

const auth = getAuth


const Auth = () => {
  const handleGoogleAuth = () => {
    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      });
  };
    return <div>
      <button onClick={handleGoogleAuth} className="btn">google signIn</button>
  </div>;
};

export default Auth;
