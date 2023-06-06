import { useDispatch } from "react-redux";
import React from 'react';
import axios from 'axios';
import './FurnitureItem.scss';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
function FurnitureItem(props) {

  const tokenUser = useSelector(state => {
    return state.isLogged.isLogged
  })
  const dispatch = useDispatch()
  const putRequest = (product) => {
    console.log(product._id);
    if (tokenUser.token) {
      axios
        .put("/cart/" + product._id)
        .then(updatedCart => {
          dispatch({ type: 'ADD_TO_BASKET', payload: product })
          console.log(updatedCart.data.products);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    } else {
      dispatch({ type: 'ADD_TO_BASKET', payload: product })
    }

  }

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
      <button type='button' className='chair__button' onClick={() => putRequest({ ...props.furniture, counter: 1 })}>У кошик <img src="/img/cart_icon.png" alt="cart" /></button>
    </div>
  )
}


export default FurnitureItem