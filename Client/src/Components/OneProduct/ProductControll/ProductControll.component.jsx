import React, { useEffect } from "react";
// import axios from 'axios';
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from 'uuid';
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useAddProduct } from "Redux/basketBackEnd";



const ProductControll = ({ myProps }) => {
  const dispatch = useDispatch()
  const AddProduct = useAddProduct()
  const [counter, setCounter] = React.useState(1);
  const [color, setColor] = React.useState(myProps.colors[0]);
  const [product, setOneProdData] = React.useState({ ...myProps, counter, color });

  const tokenUser = useSelector(state => {
    return state.isLogged.isLogged
  })
  const putRequest = (product) => {
    if (tokenUser.token) {
      AddProduct(product)
    } else {
      dispatch({ type: 'ADD_TO_BASKET', payload: product })
    }

  }

  const increase = () => {
    setCounter((count) => count + 1);
    setOneProdData((state) => ({ ...state, counter: counter + 1 }))
  }

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
    setOneProdData((state) => ({ ...state, counter: counter - 1 }))
  };

  useEffect(() => {
    setOneProdData((state) => ({ ...state, color }))
  }, [color])

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <Box display="flex" sx={{ flexDirection: "column" }} >
        <Box display="flex" sx={{ justifyContent: " space-between" }} >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              fontSize: "40px",
              color: "primary.main",
            }}
          >
            {myProps.currentPrice} грн
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "19px",
              color: "secondary.main",
              lineHeight: "3.5",
            }}
          >
            Код: {myProps.itemNo}
          </Typography>
        </Box>
        <Box pb="40px">
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "14px",
              color: "secondary.dark",
              lineHeight: "1.6",
            }}
          >
            {myProps.description}
          </Typography>
        </Box>
        <Box mb="25px">
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "800",
              fontSize: "20px",
              color: "secondary.dark",
              lineHeight: "1",
              mb: "14px",
            }}
          >
            Габарити
          </Typography>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "20px",
              color: "secondary.dark",
              lineHeight: "1.4",
            }}
          >
            {myProps.sizez}
          </Typography>
        </Box>
        
        <>
        <Typography
          sx={{
            "fontFamily": "Open Sans",
            fontWeight: "700",
            fontSize: "20px",
            pb: "21px",
          }}
        >
          Обрати колір 
        </Typography>
        <FormControl >
          <Select
            labelId="color-select"
              inputProps={{ 'aria-label': 'Without label' }}
<<<<<<< HEAD
  
            value={color}
            onChange={handleChange}
            sx={{ maxWidth: "150px" }} 
          >
          {myProps.colors.map(el=><MenuItem key={uuidv4()} value={el}>{el}</MenuItem>)}
            
          </Select>
        </FormControl>
      </>
        <Box display="flex" justifyContent={"space-between"} mt={6}>
          <Box display="flex" justifyContent={"space-between"}>
=======

              value={color}
              onChange={handleChange}
              sx={{ maxWidth: "150px" }}
            >
              {myProps.colors.map(el => <MenuItem key={uuidv4()} value={el}>{el}</MenuItem>)}

            </Select>
          </FormControl>
        </>
        <Box display="flex" justifyContent={"space-between"} mt={6}  flexWrap={"wrap"} rowGap={"15px"}>
          <Box display="flex" justifyContent={"space-between"} height={"50px"}>
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                fontSize: "1.5vw",
                lineHeight: "160%",
                mt: "auto",
                mb:"auto"
              }}
            >
              Кількість
            </Typography>
              <Box
                ml="1vw"
                borderRadius={"5px"}
                sx={{ backgroundColor: "secondary.lightest" }}
                display={"flex"}
              >
                <Button
                  onClick={increase}
                  size="small"
                  sx={{ fontSize: "2vw", color: "secondaty.dark", p: "0" }}
                >
                  +
                </Button>
                <Box backgroundColor="white" display={"flex"}>
                  <Typography
                    pl={"1vw"}
                    sx={{
                      fontWeight: "600",
                      fontSize: "2vw",
                      mt: "auto",
                      mb: "auto",
                      pr: "0,5vw",
                    }}
                  >
                    {counter}
                  </Typography>
                  <Typography
                    pr={"1vw"}
                    sx={{
                      fontWeight: "600",
                      fontSize: "1vw",
                      color: "secondary.lightest",
                      mt: "auto",
                      mb: "auto",
                    }}
                  >
                    шт
                  </Typography>
                </Box>

                <Button
                  size="small"
                  onClick={decrease}
                  sx={{ fontSize: "2vw", color: "secondaty.dark" }}
                >
                  -
                </Button>
              </Box>
          
          </Box>
          <Button 
          
            variant="contained"
            color="primary"
            href="#contained-buttons"

            sx={{ p: "12px 25px 12px 25px", borderRadius: "3px" }}
            onClick={() => putRequest(product)}
          >
            <Typography
            
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "700",
                fontSize: "1,5vw",
                
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
