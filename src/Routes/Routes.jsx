import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Schedule from "../Pages/Schedule/Schedule";
import BookingEvent from "../Pages/BookingEvent/BookingEvent";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import RaiseCapital from "../Pages/RaiseCapital/RaiseCapital";
import Invest from "../Pages/Invest/Invest";


export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/schedules',
                element:<Schedule/>
            },
            {
                path:'/booking',
                element:<BookingEvent/>
            },
            {
                path:'/marketplace',
                element:<MarketPlace/>
            },
            {
                path:'/raisecapital',
                element:<RaiseCapital/>
            },
           {
            path:'/invest',
            element:<Invest/>
           }

        ]
    }
])