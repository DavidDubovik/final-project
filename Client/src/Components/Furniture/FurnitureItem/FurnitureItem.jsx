import { useDispatch } from "react-redux";
import React from 'react';
import './FurnitureItem.scss';
import { Link } from "react-router-dom";

function FurnitureItem(props) {


  const dispatch = useDispatch()
  return (
    <div className='chair' key={uuidv4()}>
      <Link to={`/products/` + props.furniture.itemNo} relative="path" >

        <div className='chair-img__container'>
          <img src={props.furniture.imageUrls[0]} alt="" />
        </div>
        <p className='chair__title'>
          {props.furniture.name.substring(0, 28) + "..."}
        </p>
      </Link>
      <p className='chair__price'>{props.furniture.currentPrice} <span className='chair__currency'>грн</span></p>
      <button type='button' className='chair__button' onClick={() => dispatch({ type: 'ADD_TO_BASKET', payload: { ...props.furniture, counter: 1 } })}>У кошик <img src="/img/cart_icon.png" alt="cart" /></button>
    </div>
  )
}


export default FurnitureItem