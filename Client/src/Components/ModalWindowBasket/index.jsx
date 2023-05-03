import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./modalWindow.scss";
import { useDispatch, useSelector } from "react-redux";
import Product from './basket';

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1010,
    width: 1010,
    background: '#FFFFFF',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
}
export function KeepMountedModal() {

    const dispatch = useDispatch()
    const basket = useSelector(state => {
        return state.products.basket
    })
    const modalOpen = useSelector(state => {
        return state.products.isModal
    })

    useEffect(() => {
        dispatch({ type: 'BASKET' })

    })
    console.log(basket);

    const sumTo = () => {
        let i = []
        const numArry = basket.map(({ price }) => {
            let n = Number(price)
            i.push(n)
        })
        let initialValue = 0;
        const sum = i.reduce((accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
        return sum

    }
    return (
        <div>
            <Modal
                keepMounted
                open={modalOpen}
                onClose={() => dispatch({ type: 'OPEN_MODAL' })}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={styleBox}>

                    {basket.length ? <div className='product'>
                        <div className='header'><h1>Товар доданий у кошик</h1> <a href="/">Перейти у кошик</a></div>
                        <div className='main'>

                            <div className='basket-product'>

                                <Product basket={basket} />
                            </div>

                            <hr style={{ background: '#007042', height: 2, border: 'none' }}></hr>
                            <div className='sum'>
                                <p>Всього у кошику {basket.length} товари на суму <span>{sumTo()} грн</span></p>

                            </div>
                        </div>
                        <div className='button-order'><h3>продовжити покупки</h3> <Button>Оформити замовлення</Button></div>
                    </div> : <h1 style={{ margin: '0 auto', width: 200, fontSize: 30 }}> товарів немає </h1>}
                </Box>
            </Modal>
        </div >
    );
}
;