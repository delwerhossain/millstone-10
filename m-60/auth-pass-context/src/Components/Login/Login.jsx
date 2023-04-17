import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

// auth
const auth = getAuth(app);

const Login = () => {
  //state part
  const [error , setError] = useState('')
  const [success , setSuccess] = useState('')
  const [userData, setUserData] = useState("");
  
  //login part
  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess('')
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserData(user)
        setError('')
        setSuccess('successfully signed in')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode)
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-red-500 font-semibold">{error}</p>
            <p className="text-green-500 font-semibold">{success}</p>
          <label className="label">
            <Link to={"/register"} className=" label-text-alt link link-hover">
              Sign Up for new account
            </Link>
          </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
