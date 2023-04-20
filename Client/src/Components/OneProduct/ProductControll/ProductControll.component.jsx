import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

const ProductControll = (props) => {
  return (
    <>
      <Box display="flex" sx={{ flexDirection: "column" }}>
        <p>tr</p>
        <Box>price ,id</Box>
        <Box>
          desc1 Особливістю моделі стільця «Урбано» є його сучасний дизайн, який
          стане чудовим акцентом у Вашій оселі. Виріб має надійну конструкцію, а
          також є ергономічним. Стілець «Урбано» виготовлено з екологічно
          чистого масиву дуба. Гарантія від виробника – 2 роки.
        </Box>
        <Box>
          Габарити Висота 810 мм; розмір сидіння 450х450 мм; висота сидіння 450
          мм
        </Box>
        <Box>Color</Box>
        <Box>Counter</Box>
        <Box>
          <Button variant="contained" color="primary" href="#contained-buttons" sx={{p:"12px 50px 12px 50px", borderRadius:"3px"}}>
            У кошик
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default ProductControll;
