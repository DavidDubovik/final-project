import Box from '@mui/material/Box';
import React from 'react';
import { Link } from "react-router-dom";


const Logo =()=>{
  
    return(
         
               <Box          
               component={Link}  to='/'
               sx={{
                 height: 57,
                 width: 122
               }}>
                <img src="../../img/LORI_LOGO1.png"
                 alt="Lori_shop"
                 width="122px"
                  height="57px"
                 sx={{ objectFit: 'contain' }}/>
               </Box>
    
              
    )
    }
    
    export default Logo