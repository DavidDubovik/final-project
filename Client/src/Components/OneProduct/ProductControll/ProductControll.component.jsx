import React from "react";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import OneProdCounter from "../OneProductCounter/OneProdCounter.component";
import DropMenu01 from "../dropMenu01/dropMenu01.component";
const ProductControll = ({myProps}) => {
  return (
    <>
      <Box display="flex" sx={{ flexDirection: "column" }}>
        <Box display="flex" sx={{ justifyContent: " space-between" }}>
          <Typography
            sx={{
              "fontFamily": "Montserrat",
              "fontWeight": "800",
              "fontSize": "40px",
              color: "primary.main",
            }}
          >
            {myProps.currentPrice} грн
          </Typography>{" "}
          <Typography
            sx={{
              "fontFamily": "Open Sans",
              "fontWeight": "400",
              "fontSize": "19px",
              color: "secondary.main",
              "lineHeight": "3.5",
            }}
          >
            Код: {myProps.itemNo} 
          </Typography>
        </Box>
        <Box pb="40px">
          <Typography
            sx={{
              "fontFamily": "Open Sans",
              "fontWeight": "400",
              "fontSize": "14px",
              color: "secondary.dark",
              "lineHeight": "1.6",
            }}
          >
          {myProps.description} 
          </Typography>
        </Box>
        <Box mb="25px">
          <Typography
            sx={{
              "fontFamily": "Open Sans",
              "fontWeight": "800",
              "fontSize": "20px",
              color: "secondary.dark",
              "lineHeight": "1",
              mb: "14px",
            }}
          >
            Габарити
          </Typography>
          <Typography
            sx={{
              "fontFamily": "Open Sans",
              "fontWeight": "400",
              "fontSize": "20px",
              color: "secondary.dark",
              "lineHeight": "1.4",
            }}
          >
            Висота 810 мм; розмір сидіння 450х450 мм; висота сидіння 450 мм
          </Typography>
        </Box>
        <DropMenu01 props={myProps.colors}/>

        <Box display="flex" justifyContent={"space-between"} mt={6}>
          <Box display="flex" justifyContent={"space-between"}>

            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                "fontSize": "14px",
                "lineHeight": "160%",
                mt: "18px",
              }}
            >
              Кількість
            </Typography>
            <OneProdCounter />
          </Box>
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            sx={{ p: "12px 25px 12px 25px", borderRadius: "3px" }}
          >
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "700",
                "fontSize": "20px",
              }}
            >
              У кошик
            </Typography>

            <ShoppingCartOutlinedIcon
              fontSize="large"
              sx={{ color: "primary", pl: "20px" }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default ProductControll;