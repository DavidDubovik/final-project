import React, { useState } from "react";
import Paper from "@mui/material/Paper";
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
        onKeyPress={(ev) =>
          {if (ev.code === "Enter"){
            ev.preventDefault()
            navigate(`/search/${searchQuery}`)
            ev.target.value =""
          }

        }
          
        }
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
    </Paper>
  );
};

export default SearchBar;
