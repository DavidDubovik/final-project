import React from "react";
import DropList from './dropList';

const Product = ({ basket }) => {
    const d = basket.map(({ name, id, price, img_url }) => {
        return (

            <div>
                {console.log(price)}
                <div className='cardProduct'>
                    <button className='dagger'>+</button>
                    <img src={img_url} alt="#" width="100" height="100" />
                    <div className='name-product'>
                        <h3>{name.substring(0, 25)}</h3>
                        <span>Код:{id}</span>
                    </div>
                    <div className='select'>
                        <div>  <DropList /></div>

                        <div>  <DropList /></div>
                    </div>
                    <div className='container'>
                        <button id='decrement' >-</button>
                        <input type='text'  id='my-input' value={1 + 'шт'}  readOnly />
                        <button id='increment' >+</button>
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
    return d
}
export default Product 