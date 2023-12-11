import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Mainlayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Mainlayout;