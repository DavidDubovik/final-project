import React from 'react';
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";


const SearchBar =()=>{
  
    return(
        <Paper
        component="form" variant="outlined"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,borderRadius:0,height:40 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Пошук меблів"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
             <IconButton type="submit" aria-label="search" sx={{ mr:"-5px",p:"11px",border: "0",backgroundColor: "#A0A9AF", borderRadius: 0,
                '&:hover, active':{
                backgroundColor: '#007042'}
                }}>
                <SearchIcon sx={{ fill: "white"}}/>        
            </IconButton>
      </Paper>

         
              
    )
    }
    
    export default SearchBar;
   