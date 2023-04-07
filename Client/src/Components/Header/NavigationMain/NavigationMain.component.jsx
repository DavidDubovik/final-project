import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


const NavigationMain = ({navList}) => {

    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center' ,fontFamily:'Open Sans',mx:'auto'}}>

                {navList.map(mitem=>(
                    <MenuItem 
                    key={mitem.title}
                    component={NavLink}
                    to={mitem.path}
                    sx={{ color:"#000000",pr:4.5,pl:0,minWidth: 100 ,'&:hover, active':{
                        color: '#007042'}}}
                    >
                    {mitem.title}
                    </MenuItem>
                ))}
                <MenuItem sx={{ ml: 'auto', textAlign: 'center' ,fontFamily:'Open Sans'}} >Укр | Рус</MenuItem>
            </Box>
        </>
    );
    }
export default NavigationMain;
