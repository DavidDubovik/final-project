import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const OneProdCounter = (props) => {
  const [counter, setCounter] = React.useState("1");

  const increase = () => {
    setCounter((count) => count + 1);
    console.log(counter);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <>
      <Box
        ml="17px"
        borderRadius={"3px"}
        sx={{ backgroundColor: "secondary.lightest" }}
        display={"flex"}
      >
        <Button
          onClick={increase}
          sx={{ fontSize: "25px", color: "secondaty.dark" }}
        >
          +
        </Button>
        <Box backgroundColor="white" display={"flex"} >
          <Typography alignCenter pl={"18px"} sx={{ fontWeight: "600", fontSize: "23px",mt:"auto",mb:"auto",pr:"5px" }}>
            {counter}{" "}
          </Typography>
          <Typography alignCenter
            pr={"16px"}
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              color: "secondary.lightest",mt:"auto",mb:"auto"
            }}
          >
            шт
          </Typography>
        </Box>

        <Button
          onClick={decrease}
          sx={{ fontSize: "25px", color: "secondaty.dark" }}
        >
          -
        </Button>
      </Box>
    </>
  );
};
export default OneProdCounter;
