import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {ImgMediaCard} from "../../Components/PopularProducts";
import VerticalTabs from "../../Components/OneProduct/ImgSwiper/VerticalTabs.component";
import ProductControll from "../../Components/OneProduct/ProductControll/ProductControll.component";
import LoadingSpinner from "../../Components/LoadingSpiner/LoadingSpiner.component";
const OneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/`+id).then(res=>res.json()).then(data=>setProduct(data))

  },[id]);
  if (!product) {
    return <LoadingSpinner />;
  }
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
            "fontFamily": "Montserrat",
            "fontWeight": 700,
            "fontSize": "30px",
            "letterSpacing": "0.02em",
            color: "#2E3438",
          }}
        >
          {product.name}
        </Typography>
        <Grid
          container
          columnGap={5}
          sx={{ "borderBottom": "1px solid #D3D7DA", pb: "40px" }}
        >
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <VerticalTabs  imagesProps={product.imageUrls} />
          </Grid>

          <Grid xs={9} sm={9} md={5} lg={5} xl={5}>
            <ProductControll myProps={product}/>
          </Grid>

          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography
              sx={{
                pt: "40px",
                pb: "20px",
                "fontWeight": 700,
                "fontSize": "20px",
              }}
            >
              Опис
            </Typography>
            <Typography
              sx={{
                "fontWeight": 400,
                "fontSize": "14px",
              }}
            >
              {product.shortDescription}
            </Typography>
          </Grid>
        </Grid>
        <ImgMediaCard/>
      </Box>
    </>
  );
};

export default OneProduct;