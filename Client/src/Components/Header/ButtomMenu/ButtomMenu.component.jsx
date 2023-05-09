import React from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from "react-router-dom";
import MenuDrop from './MenuDrop/menudrop.component';

const ButtomMenu = ({menuList}) => {

    return (
        <Box sx={{background:"#57646E"}}>
            <Box  display="flex" sx={{maxWidth: 'lg',flexWrap: 'wrap',mx:'auto',height:"45px",alignItems: "center",justifyContent:"center"}}>
            {menuList.map(el=><MenuDrop key={uuidv4()} mList={el} />)}
            </Box>
        </Box>

        
      );
    }
export default ButtomMenu;
