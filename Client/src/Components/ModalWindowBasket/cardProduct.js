import React, { useState, useEffect } from "react";
import DropList from './dropList';
export const CardProduct = ({ name, id, price, img_url, allPrice, setAllPrice }) => {
    const [count, setCount] = useState(1)

    const inc = () => {
        if (count <= 9) {
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


    useEffect(() => {
        // setAllPrice(allPrice + +price)
        setAllPrice(currentAllPrice => currentAllPrice + +price)
    }, [])
    return (
        <div>
            <div className='cardProduct'>
                <button className='dagger'>+</button>
                <img src={img_url} alt="#" width="100" height="100" />
                <div className='name-product'>
                    <h3>{name.substring(0, 25)}</h3>
                    <span>Код:{id}</span>
                </div>
                <div className='select'>
                    <div>  <DropList nameType={''} /></div>

                    <div>  <DropList upholstery={''} /></div>
                </div>
                <div className='numberProduct'>
                    <button id='decrement' onClick={() => dec()}>-</button>
                    <lable>
                        <input type='text' id={id} value={count} readOnly />
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