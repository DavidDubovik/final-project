import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../Header/header.component.jsx';
import Footer from '../Footer/footer.js';
import AboutUs from '../About/Aboutus.js';

function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default Layout;