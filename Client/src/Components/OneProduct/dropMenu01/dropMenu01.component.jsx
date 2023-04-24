import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropMenu01 = (props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event:SelectChangeEvent) => {
      setAge(event.target.value);
    };
  return (
    <>
      <Typography
        sx={{
          "font-family": "Open Sans",
          fontWeight: "700",
          fontSize: "20px",
          pb: "21px",
        }}
      >
        Обрати колір
      </Typography>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-helper-label"
          inputProps={{ 'aria-label': 'Without label' }}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{"maxWidth":"150px"}}
        > 
  
          <MenuItem value={"Синій"}>Синій</MenuItem>
          <MenuItem value={"Блакитний"}>Блакитний</MenuItem>
          <MenuItem value={"Жовтий"}>Жовтий</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default DropMenu01;
