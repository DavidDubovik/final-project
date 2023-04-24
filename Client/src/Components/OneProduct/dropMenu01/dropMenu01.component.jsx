import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropMenu01 = (props) => {
  const [color, setColor] = React.useState("Виберіть");

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
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
      <FormControl >
        <Select
          labelId="color-select"
            inputProps={{ 'aria-label': 'Without label' }}

          value={color}
          onChange={handleChange}
          sx={{ maxWidth: "150px" }} 
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
