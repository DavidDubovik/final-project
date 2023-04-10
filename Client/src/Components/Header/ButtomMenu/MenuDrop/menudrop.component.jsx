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
    
            
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          ><Typography sx={{color:"white",fontSize:"15px",textTransfor:"uppercase"}}>{mList.title}</Typography>
         
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
          {submenues.map(el=><MenuItem key={el.title} component={NavLink} to={el.path} onClick={handleClose}>{el.title}</MenuItem>)}
         
          </Menu>

        </Box>
      );
    }
export default MenuDrop;
