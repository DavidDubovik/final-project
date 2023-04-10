import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginButton from "./LoginBotton/loginBotton.component";
import Logo from "./Logo/logo.component";
import SearchBar from "./SearchBar/searchbar.component";
import Typography from '@mui/material/Typography';

const MidleMenu = () => {

    return(
        <>
            <Box sx={{justifyContent: 'space-between', pt:2.5,pb:2.5,display: 'flex', alignItems: 'center', textAlign: 'center' ,fontFamily:'Open Sans',mx:'auto',maxWidth: 'lg'}}>
                <Logo/>
                <Typography sx = {{
                    "fontFamily": 'Open Sans',
                    "fontWeight": "700",
                    "fontSize": "18px",
                    "color": "#2E3438"
                }}>(093) 170-78-81</Typography>
                <Typography sx = {{
                    "fontFamily": 'Open Sans',
                    "fontWeight": "700",
                    "fontSize": "18px",
                    "color": "#2E3438"
                }}>(093) 170-83-23</Typography>
                <SearchBar/>
                <LoginButton/>
                <ShoppingCartOutlinedIcon  fontSize='large' />
            </Box>
        </>
    );
    }
export default MidleMenu;
