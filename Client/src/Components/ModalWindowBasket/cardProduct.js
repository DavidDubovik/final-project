import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropList from './dropList';
import axios from 'axios';
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
        if (count <= 39) {
            if (tokenUser.token) {
                setCount(count + 1)
                setAllPrice(allPrice + +price);
                await axios
                    .put("/cart/" + productId)
                    .then(updatedCart => {
                        // console.log(updatedCart.data.products);
                    })
                    .catch(err => {
                        /*Do something with error, e.g. show error to user*/
                    });
            } else {
                setCount(count + 1)
                setAllPrice(allPrice + +price);

            }

        }
    }

    const dec = async (productId) => {
        if (count >= 2) {
            if (tokenUser.token) {
                setCount(count - 1)
                setAllPrice(allPrice - +price);
                await axios
                    .delete("/cart/product/" + productId)
                    .then(updatedCart => {
                        // console.log(updatedCart.data.products);
                    })
                    .catch(err => {
                        /*Do something with error, e.g. show error to user*/
                    });
            } else {
                setCount(count - 1)
                setAllPrice(allPrice - +price);
            }


        }

    }

    const clearProduct = async (productId) => {
        if (tokenUser.token) {
            dispatch({ type: 'CLEAR_BASKET', payload: productId })
            setAllPrice(allPrice - +price * count);
            await axios
                .delete("/cart/" + productId)
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

    // useEffect(() => {
    //     console.log(basket);

    //     const object = basket.find(obj => obj._id === item)
    //     const index = basket.findIndex(obj => obj._id === item)
    //     // console.log(index);
    //     let editProduct = { ...object, counter: count }
    //     // console.log(editProduct);
    //     basket.splice(index, 1, editProduct)
    // }, [count])

    useEffect(() => {
        console.log(basket);
        if (quantiy > 1) {
            setAllPrice(allPrice + +price * count)
            setCount(quantiy)
        }
    }, [quantiy])

    // useEffect(() => {
    //     if (quantiy > 1) {
    //         setAllPrice(allPrice + +price * count)
    //         setCount(quantiy)
    //         console.log('number');
    //     }

    // }, [quantiy])


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