import React from 'react';
import Menu from '../Pages/shared/Menu';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
    return (
        <>
            <Menu></Menu>
            <Outlet></Outlet>
        </>
    );
};

export default CommonLayout;