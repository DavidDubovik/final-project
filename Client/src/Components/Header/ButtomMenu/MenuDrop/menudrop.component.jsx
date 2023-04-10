import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MenuDrop = ({mList}) => {
    const submenues=mList.submenu
    const [anchorEl, setAnchorEl] = useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Box>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            sx={{height:"45px",borderRadius:"0",pl:"32px",pr:"32px",backgroundColor: open ? "white": "#57646E"}}
          
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          ><Typography sx={{color:"white",fontSize:"15px",textTransfor:"uppercase", color: open ? "#57646E":"white"}}>{mList.title}</Typography>
         
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button'
            }}
           
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade} 
          >
          {submenues.map(el=><MenuItem sx={{'&:hover, active':{
            color: '#007042',fontWeight:"700",background: "#E0E1E2"}}} key={el.title+el.path} component={NavLink} to={el.path} onClick={handleClose}>{el.title}</MenuItem>)}
         
          </Menu>

        </Box>
      );
    }
export default MenuDrop;
