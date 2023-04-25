import React from "react";
import { Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const OneProdCounter = (props) => {
  const [counter, setCounter] = React.useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  
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
        borderRadius={"5px"}
        sx={{ backgroundColor: "secondary.lightest" }}
        display={"flex"}
      >
        <Button
          onClick={increase} size="small"
          sx={{ fontSize: "25px", color: "secondaty.dark",p:"0"}}
        >
          +
        </Button>
        <Box backgroundColor="white" display={"flex"} >
          <Typography alignCenter pl={"18px"} sx={{ fontWeight: "600", fontSize: "20px",mt:"auto",mb:"auto",pr:"5px" }}>
            {counter}
          </Typography>
          <Typography alignCenter
            pr={"10px"}
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              color: "secondary.lightest",mt:"auto",mb:"auto"
            }}
          >
            шт
          </Typography>
        </Box>

        <Button size="small"
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