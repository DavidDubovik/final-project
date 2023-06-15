<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import "./modalWindow.scss";
import axios from 'axios';

import { BASE_URL } from 'constants/api'
import { CardProduct } from './cardProduct'


const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"80%",
    background: '#FFFFFF',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
}
export function KeepMountedModal() {

    const dispatch = useDispatch()
<<<<<<< HEAD
=======

    const setAuthToken = token => {
        if (token) {
            // Apply to every request
            axios.defaults.baseURL = BASE_URL;
            axios.defaults.headers.common['Authorization'] = token;

        } else {
            // Delete auth header

            delete axios.defaults.headers.common['Authorization'];
        }
    };

    const tokenUser = useSelector(state => {
        return state.isLogged.isLogged
    })

>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
    const basket = useSelector(state => {
        return state.products.basket
    })
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify([basket]))
    }, [basket])
    console.log(basket);
    const modalOpen = useSelector(state => {
        return state.Modal.isModal
    })
    useEffect(() => {
        setAuthToken(tokenUser?.token)
        //    перенести получение продуктов кудись в друге місце 
        if (tokenUser.token) {
            axios
                .get("/cart")
                .then(cart => {

                    console.log(cart.data.products);
                    cart.data.products.map((item) => {
                        let productObject = { ...item.product, counter: item.cartQuantity }
                        dispatch({ type: 'ADD_TO_BASKET', payload: productObject })
                    })
                })
                .catch(err => {
                    console.log(err, 'err')
                    /*Do something with error, e.g. show error to user*/
                });
        }


    }, [tokenUser?.token, basket])

    const [saveAllPrice, setSaveAllPrice] = useState(0)

    return (
        <div>
            <Modal
                width={"80%"}
                keepMounted
                open={modalOpen}
                onClose={() => dispatch({ type: 'OPEN_MODAL' })}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={styleBox}>

                    {basket.length ? <div className='product'>
<<<<<<< HEAD
                        <div className='header'><h1>Товар доданий у кошик</h1> <Link to="/cart-page">Перейти у кошик</Link></div>
                        <div className='main'>

                            <div className='basket-product'>
                                {basket.map(({ name, currentPrice, imageUrls, colors, itemNo, selectedQuantiy, color, obivka, counter }) => {

=======
                        <div className='header'><h1>Товар доданий у кошик</h1> </div>
                        <div className='main'>

                            <div className='basket-product'>
                                {basket.map(({ name, currentPrice, imageUrls, colors, itemNo, selectedQuantiy, color, obivka, counter, _id }) => {
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
                                    return (
                                        <CardProduct key={itemNo} id={itemNo} name={name} price={currentPrice} Obivka={obivka} imageUrls={imageUrls} defoltColor={color} allPrice={saveAllPrice} setAllPrice={setSaveAllPrice} colorsProduct={colors} item={_id} quantiy={counter} />
                                    )
                                })}
                            </div>

                            <hr style={{ background: '#007042', height: 2, border: 'none' }}></hr>
                            <div className='sum'>
<<<<<<< HEAD
                                <p>Всього у кошику {basket.length} товари на суму <span>{saveAllPrice} грн</span></p>

                            </div>
                        </div>
                        <div className='button-order'><a href='#'>продовжити покупки</a> <Button>Оформити замовлення</Button></div>
                    </div> : <h1 style={{ margin: '0 auto', width: 200, fontSize: 30 }}> товарів немає </h1>}
=======
                                <p>Всього у кошику {basket.length} товари на суму <span>{
                                   basket.reduce((total,item)=>total+(item.counter*item.currentPrice),0)
                                } грн</span></p>
                            </div>
                        </div>
                        <div className='button-order'><Link to="/products" onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Продовжити покупки</Link><Button> <Link to="/cart-page" onClick={() => dispatch({ type: 'OPEN_MODAL' })} style={{ color: '#FFFFFF' }}>Оформити замовлення</Link></Button></div>
                    </div> : <h1 style={{ margin: 'auto', width: 200, fontSize: 30 }}> товарів немає </h1>}
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
                </Box>
            </Modal>
        </div >
    );
}
;