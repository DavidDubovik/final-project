import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import React from 'react';
import { Link } from "react-router-dom";


const SearchBar =()=>{
  
    return(
         <Box sx={{height:"52px",width:"486px", display:"flex",justifyContent: 'flex-start'}}>
         
            <TextField   sx={{width:"440px", '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: `0 0 0 0`,height:"52.6px","border-color":"A0A9AF"
                }, '&:hover fieldset': {"border-color":"#A0A9AF"},'&.Mui-focused fieldset': {
                    borderColor: '#007042', height:"50.6px"
                  }
              }
}} id="search-bar" 
                variant="outlined"
                placeholder="Пошук меблів"
                size="medium">
                </TextField>


            <IconButton type="submit" aria-label="search" sx={{height:"49.5px", border: 0,backgroundColor: "#A0A9AF", borderRadius: 0,
            '&:hover, active':{
                backgroundColor: '#007042'}
        }}>
                <SearchIcon sx={{ fill: "white"}}/>        
            </IconButton>
        </Box>  
              
    )
    }
    
    export default SearchBar;