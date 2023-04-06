import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import React from 'react';
import { Link } from "react-router-dom";


const SearchBar =()=>{
  
    return(
         <>
            <TextField   sx={{  '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: `0 0 0 0`,
                }
              }, ml:6
}} id="search-bar" 
                variant="outlined"
                placeholder="Пошук меблів"
                size="medium">
                </TextField>

            <IconButton type="submit" aria-label="search" sx={{ backgroundColor: "#A0A9AF", borderRadius: 0,
            '&:hover, active':{
                backgroundColor: '#007042'}
        }}>
                <SearchIcon sx={{ fill: "white"}}/>        
            </IconButton>
        </>  
              
    )
    }
    
    export default SearchBar;