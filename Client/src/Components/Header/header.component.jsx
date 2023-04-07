import React from "react";
import NavigationMain from "./NavigationMain/NavigationMain.component";
import Box from '@mui/material/Box';

import MidleMenu from "./MidleMenu/menu.component";
import CatMenu from "./CategoryMenu/categoryMenu.component";
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
   
            <Box sx={{fontFamily:'Open Sans',mx:'auto'}}>
                <NavigationMain navList={navList}/>
                <MidleMenu/>
                <CatMenu/>
            </Box>

    </>);
    }
export default Header;
