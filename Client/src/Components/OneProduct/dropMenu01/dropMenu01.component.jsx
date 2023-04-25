import React from "react";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";



const DropMenu01 = ({props}) => {
  const [color, setColor] = React.useState(props[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };
  return (
    <>
      <Typography
        sx={{
          "fontFamily": "Open Sans",
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
        {props.map(el=><MenuItem value={el}>{el}</MenuItem>)}
          
        </Select>
      </FormControl>
    </>
  );
};
export default DropMenu01;