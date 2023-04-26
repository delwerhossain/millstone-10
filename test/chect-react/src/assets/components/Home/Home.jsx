import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>this home page</h1>
            <Link to={'/test'}> test</Link>
        </div>
    );
};

export default Home;