import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ImgMediaCard from "../../Components/PopularProducts";

const OneProduct = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          fontFamily: "Open Sans",
          mx: "auto",
          maxWidth: "lg",
        }}
      >
        <Typography
          sx={{
            mt: 4,
            mb: 4,
            "font-family": "Montserrat",
            "font-weight": 700,
            "font-size": "30px",
            "letter-spacing": "0.02em",
            color: "#2E3438",
          }}
        >
          Стілець УРБАНО
        </Typography>
        <Grid
          container
          columnGap={5}
          sx={{ "border-bottom": "1px solid #D3D7DA", pb: "40px" }}
        >
          <Grid xs={3} sm={3} md={1} lg={1} xl={1}>
            <Box sx={{display:"flex","flexDirection":"column", "rowGap":"22px"}}>ImgList</Box>
          </Grid>
          <Grid
            container
            sx={{ "column-gap": "120px" }}
            xs={7}
            sm={7}
            md={10}
            lg={10}
            xl={10}
          >
            <Grid xs={6} sm={6} md={5} lg={5} xl={5}>
              <Box sx={{ background: "#F5F5F5" }}>Main img</Box>
            </Grid>
            <Grid xs={6} sm={6} md={5} lg={5} xl={5}>
              <Box>Description</Box>
            </Grid>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography
              sx={{
                pt: "40px",
                pb: "20px",
                "font-weight": 700,
                "font-size": "20px",
              }}
            >
              Опис
            </Typography>
            <Typography
              sx={{
                "font-weight": 400,
                "font-size": "14px",
              }}
            >
              Більше 20 варіантів фарбування (лляна олія, олія-віск, безбарвний
              лак, тонований лак, RAL) Дерев'яне або м'яке Тканина або шкірзам
              на вибір наступних торгових марок: «ЕксімТекстіль», «Аппарель»
              Картонна коробка: 2шт. в 1 коробці;Вага брутто коробки – 16
              кг;Об'єм коробки – 0,33м3;Розмір коробки – 62х68х120см
            </Typography>
          </Grid>
        </Grid>
        <ImgMediaCard />
      </Box>
    </>
  );
};

export default OneProduct;
