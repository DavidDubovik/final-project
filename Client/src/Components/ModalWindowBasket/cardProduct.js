import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropList from './dropList';
import axios from 'axios';
import { BASE_URL } from "constants/api";
export const CardProduct = ({ name, id, price, imageUrls, allPrice, setAllPrice, colorsProduct, item, quantiy, defoltColor }) => {
    const [count, setCount] = useState(quantiy ? quantiy : 1)
    const dispatch = useDispatch()
    const basket = useSelector(state => {
        return state.products.basket
    })
    const tokenUser = useSelector(state => {
        return state.isLogged.isLogged
    })

    const inc = async (productId) => {
        // console.log(basket);
        if (count <= 39) {
            if (tokenUser.token) {
                setCount(count + 1)
                setAllPrice(allPrice + +price);
                await axios
                    .put(BASE_URL+"/api/cart/" + productId)
                    .then(updatedCart => {
                        // console.log(updatedCart.data.products);
                    })
                    .catch(err => {
                        /*Do something with error, e.g. show error to user*/
                    });
            } else {
                setCount(count + 1)
                setAllPrice(allPrice + +price);
                // dispatch({ type: 'EDIT_OBJECT', payload: { id: item, productCounter: count } })
            }

        }
    }

    const dec = async (productId) => {
        if (count >= 2) {
            if (tokenUser.token) {
                setCount(count - 1)
                setAllPrice(allPrice - +price);
                await axios
                    .delete(BASE_URL+"/api/cart/product/" + productId)
                    .then(updatedCart => {
                        // console.log(updatedCart.data.products);
                    })
                    .catch(err => {
                        /*Do something with error, e.g. show error to user*/
                    });
            } else {
                setCount(count - 1)
                setAllPrice(allPrice - +price);
                // dispatch({ type: 'EDIT_OBJECT', payload: { id: item, productCounter: count } })

            }


        }

    }

    const clearProduct = async (productId) => {
        if (tokenUser.token) {
            dispatch({ type: 'CLEAR_BASKET', payload: productId })
            setAllPrice(allPrice - +price * count);
            await axios
                .delete(BASE_URL+"/api/cart/" + productId)
                .then(result => {
                    // console.log(result.data);
                })
                .catch(err => {
                    /*Do something with error, e.g. show error to user*/
                });
        } else {
            dispatch({ type: 'CLEAR_BASKET', payload: productId })
            setAllPrice(allPrice - +price * count);
        }

    }

    useEffect(() => {
        if (quantiy <= 1) {
            setAllPrice(currentAllPrice => currentAllPrice + +price)
        }

    }, [])

    useEffect(() => {
        dispatch({ type: 'EDIT_OBJECT', payload: { id: item, productCounter: count } })
    }, [count])

    useEffect(() => {

        if (quantiy > 1) {
            setAllPrice(allPrice + +price * count)
            setCount(quantiy)
        }
    }, [quantiy])



    return (
        <div>
            <div className='cardProduct'>
                <button className='dagger' onClick={() => clearProduct(item)} >+</button>
                <div style={{ width: 100, height: 100 }}>
                    <img className="picture-product" src={imageUrls[0]} alt="#" width="100" height="100" style={{ objectFit: "contain" }} />
                </div>
                <div className='name-product'>
                    <h3>{name.substring(0, 25)}</h3>
                    <span>Код:{id}</span>
                </div>
                <div className='select'>
                    <div>  <DropList colorType={colorsProduct} colorValue={defoltColor} /></div>

                    <div className="line">  </div>
                </div>
                <div className='numberProduct'>
                    <button id='decrement' onClick={() => dec(item)}>-</button>
                    <lable>
                        <input type='text' value={count} readOnly />
                        <span>шт</span>
                    </lable>
                    <button id='increment' onClick={() => inc(item)}>+</button>
                </div>
                <div className='text-price'>
                    {count > 1 ? <><span>{count * price + 'грн'}</span> <p>{count + 'x' + price + 'грн'}</p></> : count * price + 'грн'}
                </div>
            </div>
            <hr style={{ background: '#D3D7DA', height: 2, border: 'none', width: '100%' }}></hr>
        </div>
    )

}