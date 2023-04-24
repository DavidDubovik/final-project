import React from "react";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import OneProdCounter from "../OneProdCounter/OneProdCounter.component";
import DropMenu01 from "../dropMenu01/dropMenu01.component";
const ProductControll = (props) => {
  return (
    <>
      <Box display="flex" sx={{ flexDirection: "column" }}>
        <Box display="flex" sx={{ justifyContent: " space-between" }}>
          <Typography
            sx={{
              "font-family": "Montserrat",
              "font-weight": "800",
              "font-size": "40px",
              color: "primary.main",
            }}
          >
            1 440 грн
          </Typography>{" "}
          <Typography
            sx={{
              "font-family": "Open Sans",
              "font-weight": "400",
              "font-size": "19px",
              color: "secondary.main",
              "line-height": "3.5",
            }}
          >
            Код: 303025
          </Typography>
        </Box>
        <Box pb="40px">
          <Typography
            sx={{
              "font-family": "Open Sans",
              "font-weight": "400",
              "font-size": "14px",
              color: "secondary.dark",
              "line-height": "1.6",
            }}
          >
            Особливістю моделі стільця «Урбано» є його сучасний дизайн, який
            стане чудовим акцентом у Вашій оселі. Виріб має надійну конструкцію,
            а також є ергономічним. Стілець «Урбано» виготовлено з екологічно
            чистого масиву дуба. Гарантія від виробника – 2 роки.
          </Typography>
        </Box>
        <Box mb="25px">
          <Typography
            sx={{
              "font-family": "Open Sans",
              "font-weight": "800",
              "font-size": "20px",
              color: "secondary.dark",
              "line-height": "1",
              mb: "14px",
            }}
          >
            Габарити
          </Typography>
          <Typography
            sx={{
              "font-family": "Open Sans",
              "font-weight": "400",
              "font-size": "20px",
              color: "secondary.dark",
              "line-height": "1.4",
            }}
          >
            Висота 810 мм; розмір сидіння 450х450 мм; висота сидіння 450 мм
          </Typography>
        </Box>
        <DropMenu01 />

        <Box display="flex" justifyContent={"space-between"} mt={6}>
          <Box display="flex" justifyContent={"space-between"}>

            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                "font-size": "14px",
                "line-height": "160%",
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
                "font-size": "20px",
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
