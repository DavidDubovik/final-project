import React, {  useEffect,useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from '@mui/material/Typography';

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink} from "react-router-dom";
import { useDispatch} from "react-redux";
import { fetchAsyncAllProducts } from "../../../../Redux/products.reducer";
import styles from "./searchbar.module.scss";

import { v4 as uuidv4 } from "uuid";

const SearchBar = () => {
  const dispatch = useDispatch()
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(()=>{
    dispatch(fetchAsyncAllProducts()).then((data)=>{setData(data.payload)})
  },[dispatch])
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
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
        position: "relative"
      }}
    >
      <InputBase
        onKeyPress={(ev) =>
          {if (ev.code === "Enter"){
            ev.preventDefault()
            ev.target.value =""
          }

        }
          
        }
        onSubmit={e => { e.preventDefault(); }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Пошук меблів"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleFilter}
        component={NavLink}
       
      />
      <IconButton
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

      
      >
      {filteredData.length === 0 ? (
        <SearchIcon sx={{ fill: "white" }} />
      ) : (
        <CloseIcon id="clearBtn" sx={{ fill: "white" }}  onClick={clearInput} />
      )}
        
      </IconButton>
   
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
    </Paper>
  );
};

export default SearchBar;
