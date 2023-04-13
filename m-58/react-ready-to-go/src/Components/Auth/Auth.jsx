import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.init';


const Auth = () => {
    const auth = getAuth(app)
    console.log(auth);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => { 
                const user = result.user
                console.log('user--' ,user);	
            })
            .catch(error => {
                console.log('error', error.message);
            })
        // console.log('gggg');
     }

    return (
        <div>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
               Sign in
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >   
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button className="w-full mb-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                    <button onClick={handleGoogleSignIn()} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-semibold flex gap-4 text-center justify-center">
                       <img className='w-5' src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png" alt="" /> Login with google 
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                >
                    Sign up
                </a>
            </p>
        </div>
            </div>
            
            <div className='bg-indigo-100 my-6'>
                <h1>name :</h1>
                <h1>mail : </h1>
                {/* <img src={user?.image} alt="" /> */}
            </div>
    </div>
    );
};

export default Auth;