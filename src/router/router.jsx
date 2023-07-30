import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomePage from "../Pages/HomePage/HomePage";
import About from '../Pages/About/About';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Logement from '../Pages/Logement/Logement';


//mise en page general//
export const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
export const router = createBrowserRouter([
    {
        element: < HeaderFooterLayout />,
        errorElement: <ErrorPage />,


        children: [
            {
                path: "/",
                element: <HomePage />,
            },


            {
                path: "/logements/:id",
                element: <Logement />,
            },
            {
                path: "/about",
                element: <About />,
            },

            {
                path: "*",
                element: <ErrorPage />,
            }
        ]
    }

]);

