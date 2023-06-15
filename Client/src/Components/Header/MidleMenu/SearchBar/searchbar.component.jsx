import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: 300,
        maxWidth: 400,
        borderRadius: 1,
        height: 40,
      }}
    >
      <InputBase
<<<<<<< HEAD
        onKeyPress={(ev) =>
          {if (ev.code === "Enter"){
            ev.preventDefault()
            navigate(`/search/${searchQuery}`)
            ev.target.value =""
          }

        }
          
        }
=======
        value={wordEntered}
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
        onSubmit={e => { e.preventDefault(); }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Пошук меблів"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        component={NavLink}
        to={`/search/${searchQuery}`}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{
          mr: "-5px",
          p: "11px",
          border: "0",
          backgroundColor: "#A0A9AF",
          borderRadius: "0 3px 3px 0",
          "&:hover, active": {
            backgroundColor: "#007042",
          },
        }}
        component={NavLink}
        to={`/search/${searchQuery}`}
      >
        <SearchIcon sx={{ fill: "white" }} />
      </IconButton>
<<<<<<< HEAD
=======
   
      {filteredData.length !== 0 && (<Paper sx={{width:"300px","maxHeight":"300px",position: "absolute",top:"48px",overflow:"hidden","zIndex": "5", "overflowY": "auto"}}>
        {filteredData.slice(0, 15).map((value, key) => {
          return (
            <NavLink key={uuidv4()}  onClick={clearInput} to={`/products/${value.itemNo}`} className={styles.nav}>
            <Box display={"flex"} sx={{border:"1px solid #E0E1E2",}}><Box component="img"  sx={{
              height: 25,
              width: 25,
              mr:2,
              mt:"auto",
              mb:"auto"
            }} src={value.imageUrls[0]}
            ></Box><Typography color="secondary.dark">{value.name.slice(0, 29)}... </Typography></Box></NavLink>
              
           
          );
        })}
      </Paper>)}
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
    </Paper>
  );
};

export default SearchBar;
