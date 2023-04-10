import React from "react";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginButton from "./LoginBotton/loginBotton.component";
import Logo from "./Logo/logo.component";
import SearchBar from "./SearchBar/searchbar.component";
import Typography from '@mui/material/Typography';
import Badge from "@mui/material/Badge";

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
                <IconButton aria-label="add to shopping cart"  >
                    <Badge badgeContent="3" color="primary">
                        <ShoppingCartOutlinedIcon  fontSize='large' sx={{color:"#57646E"}} />
                    </Badge>
                </IconButton>
                
            </Box>
        </>
    );
    }
export default MidleMenu;
