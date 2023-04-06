import React from "react";
import NavigationMain from "./NavigationMain/NavigationMain.component";

const navList =[
    {
        title: "Головна",
        path: "/",
    },
    {
        title: "Партнерам",
        path: "/partners",
    },

    {
        title: "Наші магазини",
        path: "/shops",
    },
    {
        title: "Про нас",
        path: "/aboutus",
    },
    {
        title: "Акції",
        path: "/disconts",
    }
]
const Header = (props) => {

    return(
        <>
        <NavigationMain navList={navList}/>
        <h1>Header block</h1>
    </>);
    }
export default Header;
