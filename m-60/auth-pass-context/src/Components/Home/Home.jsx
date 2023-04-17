import React, { useContext } from 'react';
import { AuthContext } from '../../providers/authproviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className='p-4 text-white bg-indigo-500 rounded-lg'>Home  name : {user&&user.displayName }</h1>
        </div>
    );
};

export default Home;