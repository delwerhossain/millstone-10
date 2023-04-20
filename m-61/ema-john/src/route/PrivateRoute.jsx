import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <div className=' items-center my-8 flex justify-center'><div><h1 className='text-2xl mt-3 text-center'>loading...</h1> <progress className=" progress w-56"></progress></div></div>
    }
    if (user) {
        return children
    }
   return <Navigate to={'/login'}></Navigate>
   
};

export default PrivateRoute;