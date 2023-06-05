import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {ImgMediaCard} from "../../Components/PopularProducts";
import VerticalTabs from "../../Components/OneProduct/ImgSwiper/VerticalTabs.component";
import ProductControll from "../../Components/OneProduct/ProductControll/ProductControll.component";
import LoadingSpinner from "../../Components/LoadingSpiner/LoadingSpiner.component";
import { NavLink } from "react-router-dom";
import { fetchAsyncOneProduct } from "../../Redux/products.reducer";
import { useDispatch,useSelector} from "react-redux";

const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {oneproduct,status1} = useSelector(state => {
    return state.allProducts
})
  useEffect(() => {
    
    dispatch(fetchAsyncOneProduct(id))
    
  },[id]);
  if (status1!=="loaded") {
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
        <Box display="flex" sx={{
          "fontSize": "14px",
          fontFamily: "Open Sans",
          mt:"25px",
          gap:"15px",
          textTransform:"capitalize"
        }}><Typography  component={NavLink} to={"/"} sx={{color:"black"}}>Main</Typography><Typography color="primary">{">"}</Typography><Typography>{oneproduct.categories}</Typography></Box>
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
          {oneproduct.name}
        </Typography>
        <Grid
          container
          columnGap={5}
          sx={{ "borderBottom": "1px solid #D3D7DA", pb: "40px" }}
        >
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <VerticalTabs  imagesProps={oneproduct.imageUrls} />
          </Grid>

          <Grid xs={9} sm={9} md={5} lg={5} xl={5}>
            <ProductControll myProps={oneproduct}/>
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
              {oneproduct.shortDescription}
            </Typography>
          </Grid>
        </Grid>
        <ImgMediaCard/>
      </Box>
    </>
  );
};

export default OneProduct;