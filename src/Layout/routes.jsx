import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Mainlayout';
import Home from '../pages/Home';
import ErrorRoute from './ErrorRoute';

const routes =createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorRoute></ErrorRoute>,
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            }
        ]
    }
])

export default routes;