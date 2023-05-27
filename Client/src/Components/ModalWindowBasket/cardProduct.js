import React, { useState, useEffect } from "react";
import DropList from './dropList';
import { useDispatch, useSelector } from "react-redux";
export const CardProduct = ({ name, id, price, imageUrls, allPrice, setAllPrice, colorsProduct, item, quantiy, defoltColor, Obivka }) => {
    const [count, setCount] = useState(quantiy ? quantiy : 1)

    const dispatch = useDispatch()
    const basket = useSelector(state => {
        return state.products.basket
    })
    const inc = () => {
        if (count <= 39) {
            setCount(count + 1)
            setAllPrice(allPrice + +price);
        }
    }

    const dec = () => {
        if (count >= 2) {
            setCount(count - 1)
            setAllPrice(allPrice - +price);
        }

    }

    const clearProduct = (productId) => {
        dispatch({ type: 'CLEAR_BASKET', payload: productId })
        setAllPrice(allPrice - +price * count);
        console.log(basket.length);
    }

    useEffect(() => {
        if (quantiy <= 1) {
            setAllPrice(currentAllPrice => currentAllPrice + +price)
        }
    }, [])
    useEffect(() => {
        if (quantiy >= 1) {
            setAllPrice(currentAllPrice => currentAllPrice + (+price * count))
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
                    <button id='decrement' onClick={() => dec()}>-</button>
                    <lable>
                        <input type='text' value={count} readOnly />
                        <span>шт</span>
                    </lable>
                    <button id='increment' onClick={() => inc()}>+</button>
                </div>
                <div className='text-price'>
                    {count > 1 ? <><span>{count * price + 'грн'}</span> <p>{count + 'x' + price + 'грн'}</p></> : count * price + 'грн'}
                </div>
            </div>
            <hr style={{ background: '#D3D7DA', height: 2, border: 'none', width: '100%' }}></hr>
        </div>
    )

}