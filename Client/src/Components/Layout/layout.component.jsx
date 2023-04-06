import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../Header/header.component.jsx';
import Footer from '../Footer/footer.component.jsx';

function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;