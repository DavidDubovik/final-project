import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
   
    return (
        <Box 
        component={NavLink} to={mList.path}  >
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            sx={{height:"45px",borderRadius:"0",pl:"32px",pr:"32px",backgroundColor: open ? "white": "#57646E",'&:hover':{background:"#007042"}}}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
          ><Typography sx={{fontWeight:"700",fontSize:"15px",textTransfor:"uppercase", color: open ? "#57646E":"white",}}>{mList.title}</Typography>
         
          </Button>
          <Menu 
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button'
            }}
            anchorEl={anchorEl}
            open={open}
            
            TransitionComponent={Fade} 
          >
          {submenues.map(el=><MenuItem sx={{'&:hover, active':{
            color: '#007042',fontWeight:"700",background: "#E0E1E2"}}} key={uuidv4()}  component={NavLink} to={el.path} >{el.title}</MenuItem>)}
         
          </Menu>

        </Box>
      );
    }
export default MenuDrop;
