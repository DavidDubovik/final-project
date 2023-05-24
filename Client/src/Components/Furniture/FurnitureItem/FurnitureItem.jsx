import React, { Component } from 'react';
import './FurnitureItem.scss';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export class FurnitureItem extends Component {
  

  render() {
    return (
      <div className='chair' key={uuidv4()}>
      <Link to={`/products/`+this.props.furniture.itemNo} relative="path" >
        <div className='chair-img__container'>
            <img src={this.props.furniture.imageUrls[0]} alt="" />
        </div>
        <p className='chair__title'>
            {this.props.furniture.name.substring(0,28) +"..."}
        </p>
        </Link>
        <p className='chair__price'>{this.props.furniture.currentPrice} <span className='chair__currency'>грн</span></p>
        <button type='button' className='chair__button'>У кошик <img src="/img/cart_icon.png" alt="cart" /></button>
      </div>
    )
  }
}

export default FurnitureItem