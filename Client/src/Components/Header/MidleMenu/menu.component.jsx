import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import Logo from "./Logo/logo.component";
import SearchBar from "./SearchBar/searchbar.component";
const MidleMenu = () => {

    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center' ,fontFamily:'Open Sans',maxWidth: 'md',mx:'auto'}}>
                <Logo/>
                <SearchBar/>
            </Box>
        </>
    );
    }
export default MidleMenu;
