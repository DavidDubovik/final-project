import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import "./modalWindow.scss";
import { useDispatch, useSelector } from "react-redux";
import { CardProduct } from './cardProduct'

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
        return state.Modal.isModal
    })
  
    // const Open = useSelector(state => {
    //     return state.Modal.isModal
    // })
    const [saveAllPrice, setSaveAllPrice] = useState(0)
    //   console.log(basket);
    console.log(saveAllPrice);
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
                        <div className='header'><h1>Товар доданий у кошик</h1> <Link to="/cart-page" onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Перейти у кошик</Link></div>
                        <div className='main'>

                            <div className='basket-product'>
                                {basket.map(({ name, currentPrice, imageUrls, colors, itemNo, selectedQuantiy, color, obivka, counter }) => {
                                    return (
                                        <CardProduct key={itemNo} id={itemNo} name={name} price={currentPrice} Obivka={obivka} imageUrls={imageUrls} defoltColor={color} allPrice={saveAllPrice} setAllPrice={setSaveAllPrice} colorsProduct={colors} item={itemNo} quantiy={counter} />
                                    )
                                })}
                            </div>

                            <hr style={{ background: '#007042', height: 2, border: 'none' }}></hr>
                            <div className='sum'>
                                <p>Всього у кошику {basket.length} товари на суму <span>{saveAllPrice} грн</span></p>
                            </div>
                        </div>
                        <div className='button-order'><Link to="/products">Продовжити покупки</Link><Button>Оформити замовлення</Button></div>
                    </div> : <h1 style={{ margin: 'auto', width: 200, fontSize: 30 }}> товарів немає </h1>}
                </Box>
            </Modal>
        </div >
    );
}
;