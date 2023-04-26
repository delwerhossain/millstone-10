import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <h1>this Test page</h1>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default Test;