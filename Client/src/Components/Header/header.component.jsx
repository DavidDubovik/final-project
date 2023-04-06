import React from "react";
import NavigationMain from "./NavigationMain/NavigationMain.component";
import Box from '@mui/material/Box';

import MidleMenu from "./MidleMenu/menu.component";

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
   
            <Box sx={{fontFamily:'Open Sans',maxWidth: 'md',mx:'auto'}}>
                <NavigationMain navList={navList}/>
                <MidleMenu/>
                <h1>Header block</h1>
            </Box>

    </>);
    }
export default Header;
