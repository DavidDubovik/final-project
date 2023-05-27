import React from "react";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginButton from "./LoginBotton/loginBotton.component";
import Logo from "./Logo/logo.component";
import SearchBar from "./SearchBar/searchbar.component";
import Typography from '@mui/material/Typography';
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { KeepMountedModal } from "../../ModalWindowBasket";
import { loguotCustomer } from "../../../Redux/login.reducer";
const MidleMenu = () => {

    const dispatch = useDispatch()
    const basket = useSelector(state => {
        return state.products.basket
    })
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    // let basketLength = basket[0].length
    // console.log(basketLength);
    return (
        <>
            <Box sx={{ justifyContent: 'space-between', pt: 2.5, pb: 2.5, display: 'flex', alignItems: 'center', textAlign: 'center', fontFamily: 'Open Sans', mx: 'auto', maxWidth: 'lg', flexWrap: 'wrap' }}>
                <Logo />
                <Typography sx={{
                    "fontFamily": 'Open Sans',
                    "fontWeight": "700",
                    "fontSize": "18px",
                    "color": "#2E3438",
                    display: { sm: 'none', md: 'block' }
                }}>(093) 170-78-81</Typography>
                <Typography sx={{
                    "fontFamily": 'Open Sans',
                    "fontWeight": "700",
                    "fontSize": "18px",
                    "color": "#2E3438",
                    display: { sm: 'none', md: 'block' }
                }}>(093) 170-83-23</Typography>
                <SearchBar />
                {isLogged?<Typography onClick={()=>dispatch(loguotCustomer())}>Вийти</Typography> : <LoginButton />}
                <IconButton aria-label="add to shopping cart"  >
                    <Badge badgeContent={basket.length} color="primary">
                        <KeepMountedModal />
                        <ShoppingCartOutlinedIcon fontSize='large' sx={{ color: "#57646E" }} onClick={() => { dispatch({ type: 'OPEN_MODAL' }) }} />
                    </Badge>
                </IconButton>

            </Box>
        </>
    );
}
export default MidleMenu;
