import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/authproviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'><progress className="progress w-56 "></progress></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} replace={true} /> 
};

export default PrivateRoute;