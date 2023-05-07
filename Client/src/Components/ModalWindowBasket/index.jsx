import React, { useEffect, useState } from 'react';
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
        return state.products.isModal
    })

    useEffect(() => {
        dispatch({ type: 'BASKET' })

    })

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
    const [saveAllPrice, setSaveAllPrice] = useState(0)
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
                                {basket.map(({ name, id, currentPrice, imageUrls, colors, itemNo, selectedQuantiy }) => {

                                    return (
                                        <CardProduct id={id} name={name} price={currentPrice} imageUrls={imageUrls} allPrice={saveAllPrice} setAllPrice={setSaveAllPrice} color={colors} item={itemNo} quantiy={selectedQuantiy} />
                                    )
                                })}
                            </div>

                            <hr style={{ background: '#007042', height: 2, border: 'none' }}></hr>
                            <div className='sum'>
                                <p>Всього у кошику {basket.length} товари на суму <span>{saveAllPrice} грн</span></p>

                            </div>
                        </div>
                        <div className='button-order'><a href='#'>продовжити покупки</a> <Button>Оформити замовлення</Button></div>
                    </div> : <h1 style={{ margin: '0 auto', width: 200, fontSize: 30 }}> товарів немає </h1>}
                </Box>
            </Modal>
        </div >
    );
}
;