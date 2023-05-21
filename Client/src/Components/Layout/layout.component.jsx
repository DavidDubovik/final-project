import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../Header/header.component.jsx';
import Footer from '../Footer/footer.js';
import UserRequest from '../UserRequest/UserRequest.jsx';

function Layout(props) {
    return (
        <>
            <Header/>
            <UserRequest />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;