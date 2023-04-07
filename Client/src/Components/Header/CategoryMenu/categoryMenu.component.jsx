import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const categories = [
    "Столи",
]
const CatMenu = ({navList}) => {

    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center' ,fontFamily:'Open Sans',backgroundColor:"#57646E"}}>
                <Box sx={{maxWidth: 'lg',mx:'auto',width:"100%",height:"45px"}}>Дроп меню</Box>
            </Box>
        </>
    );
    }
export default CatMenu;
