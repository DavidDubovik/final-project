import Box from '@mui/material/Box';
import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const LoginButton =()=>{
  
    return(
         
               <Box          
               component={Link}  to='/'
               sx={{display:"flex",
                 height: 57,
                 width: 122,alignItems: 'center'
               }} alignItems="stretch">
                
                  <Avatar sx={{ width: 36, height: 36 }}></Avatar>
                  <Typography sx={{ minWidth: 100 }}>Увійти</Typography>

               </Box>
    
              
    )
    }
    
    export default LoginButton