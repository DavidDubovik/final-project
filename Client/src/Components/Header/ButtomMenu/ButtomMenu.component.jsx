import React, { useState } from 'react';
import Box from '@mui/material/Box';


import MenuDrop from './MenuDrop/menudrop.component';

const ButtomMenu = ({menuList}) => {

    return (
        <Box sx={{background:"#57646E"}}>
            <Box display="flex" sx={{maxWidth: 'lg',mx:'auto',height:"45px",alignItems: "center",justifyContent:"space-around"}}>
            {menuList.map(el=><MenuDrop key={el.title} mList={el}/>)}
            </Box>
        </Box>

        
      );
    }
export default ButtomMenu;
