import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ImgMediaCard from "../../Components/PopularProducts";
import VerticalTabs from "../../Components/OneProduct/ImgSwiper/VerticalTabs.component";
import ProductControll from "../../Components/OneProduct/ProductControll/ProductControll.component";
import { BASE_URL } from "../../constants/api";

const OneProduct = () => {
  const [product, setProduct] = useState(null);
  const myConfi={ method: "GET",headers: {'accept': 'application/json',
  'Access-Control-Allow-Origin': "http://localhost:3000",
  'content-type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Credentials': 'true',
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
  'Access-Control-Allow-Headers': "*"

  }}
  useEffect(() => {
  
    async function getProduct() {
      const res = await fetch(`${BASE_URL}/products/467294`);
      const data = await res.json();
      setProduct(data);
    }
    getProduct();
  });
 console.log(product)
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
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <VerticalTabs />
          </Grid>

          <Grid xs={9} sm={9} md={5} lg={5} xl={5}>
            <ProductControll />
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
