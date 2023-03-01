import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import './Main.css'
const Main = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;