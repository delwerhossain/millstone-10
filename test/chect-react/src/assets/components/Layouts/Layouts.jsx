import React from 'react';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <h1>header Layouts</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;