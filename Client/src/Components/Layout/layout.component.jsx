import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/header.component.jsx';
import Footer from '../Footer/footer.js';
import { useDispatch } from "react-redux";
import { loadProductsAsync } from '../../Redux/reducer.js';
import UserRequest from '../UserRequest/UserRequest.jsx';
function Layout(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadProductsAsync())
        // console.log(JSON.parse(localStorage.getItem('basket')));
    })
    return (
        <>
            <Header />
            {/* Test? */}
            <UserRequest />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;