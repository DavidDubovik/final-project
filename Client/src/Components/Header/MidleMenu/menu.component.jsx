import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import LoginButton from "./LoginBotton/loginBotton.component";
import Logo from "./Logo/logo.component";
import SearchBar from "./SearchBar/searchbar.component";
const MidleMenu = () => {

    return(
        <>
            <Box sx={{justifyContent: 'space-between', pt:2.5,pb:2.5,display: 'flex', alignItems: 'left', textAlign: 'center' ,fontFamily:'Open Sans',mx:'auto',maxWidth: 'lg'}}>
                <Logo/>
                <p>(093) 170-78-81</p>
                <p>(093) 170-83-23</p>
                <SearchBar/>
                <LoginButton/>
                <LocalGroceryStoreIcon fontSize='large'/>
            </Box>
        </>
    );
    }
export default MidleMenu;
