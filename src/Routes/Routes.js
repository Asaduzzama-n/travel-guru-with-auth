import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog/Blog';
import Booking from '../Component/Booking/Booking';
import Contact from '../Component/Contact/Contact';
import Destination from '../Component/Destination/Destination';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import Main from '../Layout/Main';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: async () => fetch('http://localhost:5000/')
            },
            {
                path:'/destination/:id',
                element:<Destination></Destination>,
                loader: async ({params}) => fetch(`http://localhost:5000/destination/${params.id}`) 
                
            },
            {
                path:'/booking',
                element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
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