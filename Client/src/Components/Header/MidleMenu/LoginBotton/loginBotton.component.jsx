import Box from '@mui/material/Box';
import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Link as RouterLink
} from 'react-router-dom';
const LoginButton =()=>{
  
    return(
         
               <Box          
               component={Link}  to='/'
               sx={{display:"flex",
                 height: 57,
                 width: 122,alignItems: 'center'
               }} alignItems="stretch">
                
                  <Avatar sx={{ width: 36, height: 36,border:"2px solid #57646E",backgroundColor:"white",color:"#57646E"}} component={RouterLink} to="/profile"></Avatar>
                  <Button sx={{'&:hover, active':{
                    color: '#007042'}}}>
                    <Typography sx={{ minWidth: 100,color: "#57646E",fontSize: "14px",textTransform:"capitalize",'&:hover, active':{
                      color: '#007042'}}}>Увійти</Typography>
                  </Button>
                  
                  
               </Box>
    
              
    )
    }
    
    export default LoginButton