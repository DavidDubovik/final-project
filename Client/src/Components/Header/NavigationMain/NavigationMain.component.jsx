import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


const NavigationMain = ({navList}) => {

    return(
        <Box sx={{borderBottom:"1px solid #E0E1E2"}}>
            <Box sx={{ display: 'flex', alignItems: 'left',fontFamily:'Open Sans',mx:'auto',maxWidth: 'lg',h:"41px"}}>

                {navList.map(mitem=>(
                    <MenuItem 
                    key={mitem.title}
                    component={NavLink}
                    to={mitem.path}
                    sx={{ color:"#000000",minWidth: 100,'&:hover, active':{
                        color: '#007042'}}}
                    >
                    {mitem.title}
                    </MenuItem>
                ))}
            </Box>
        </Box>
    );
    }
export default NavigationMain;
