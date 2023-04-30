import React, { useState } from "react";
import DropList from './dropList';


const Product = ({ basket }) => {
    const increment = (el) => {
        const block = el.target.parentElement
        const input = block.querySelector('input')
        if (input.value.split('шт')[0] <= 9) {
            input.value = Number(input.value.split('шт')[0]) + 1
            input.setAttribute('value', input.value);
        }
    }

    const decrement = (el) => {
        const block = el.target.parentElement
        const input = block.querySelector('input')
        if (input.value.split('шт')[0] >= 2) {
            input.value = Number(input.value.split('шт')[0]) - 1
            input.setAttribute('value', input.value);
        }
    }
    const products = basket.map(({ name, id, price, img_url, color, materials }) => {
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
                        <div>  <DropList nameType={basket} /></div>

                        <div>  <DropList upholstery={basket} /></div>
                    </div>
                    <div className='numberProduct'>
                        <button id='decrement' onClick={(el) => decrement(el)}>-</button>
                        <lable>
                            <input type='text' id={id} value={1} readOnly />
                            <span>шт</span>
                        </lable>
                        <button id='increment' onClick={(el) => increment(el)}>+</button>
                    </div>
                    <div className='text-price'>
                        <span >
                            {price} грн
                        </span>
                    </div>

                </div>
                <hr style={{ background: '#D3D7DA', height: 2, border: 'none', width: '100%' }}></hr>
            </div>)
    })
    return products
}
export default Product 