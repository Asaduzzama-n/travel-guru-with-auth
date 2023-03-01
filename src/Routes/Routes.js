import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog/Blog';
import Contact from '../Component/Contact/Contact';
import Destination from '../Component/Destination/Destination';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import Main from '../Layout/Main';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/destination',
                element:<Destination></Destination>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])