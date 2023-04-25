import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSpinner(props) {
  return (
    <Box sx={{ mx: "auto", maxWidth: 'lg' }}>
      <CircularProgress sx={{m:"100px",mx:"45%"}}/>
    </Box>
  );
}

export default LoadingSpinner;
