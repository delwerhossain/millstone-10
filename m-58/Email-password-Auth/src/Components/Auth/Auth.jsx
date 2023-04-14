import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const Auth = () => {
  const [user, setUser] = useState([]);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        setUser(googleUser);
        // console.log("user--", googleUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGitSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const gitUser = result.user;
        setUser(gitUser);
        // console.log("user git--", gitUser);
      })
      .catch((error) => {
        console.log("error git--", error.message);
      });
  };

  console.log("user - ", user);
  return (
    <div>
      <div className="mt-6">
        <button className="w-full mb-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          Login
        </button>
        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-blue-900 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-semibold flex gap-4 text-center justify-center mb-4"
          >
            <img
              className="w-5"
              src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png"
              alt=""
            />{" "}
            Login with google
          </button>
          <button
            onClick={handleGitSignIn}
            className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transhtmlForm border bg-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-semibold flex gap-4 text-center justify-center"
          >
           <svg height="26" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="26" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>Login with Git
          </button>
        </div>
      </div>
      <div>
        <p>name : {user.displayName}</p>
        <img src={user.photoURL} alt="" />

      </div>
    </div>
  );
};

export default Auth;
