import React, { Component } from 'react';
import './ChairsItem.scss';
import { Link } from "react-router-dom";

export class ChairsItem extends Component {


  render() {
    return (
      <div className='chair'>
      <Link to={`/products/`+this.props.chair.itemNo} relative="path">
        <div className='chair-img__container'>
            <img src={this.props.chair.imageUrls[0]} alt="" />
        </div>
        <p className='chair__title'>
            {this.props.chair.name}
        </p>
        </Link>
        <p className='chair__price'>{this.props.chair.currentPrice} <span className='chair__currency'>грн</span></p>
        <button type='button' className='chair__button' onClick={() => this.info()}>У кошик <img src="./img/cart_icon.png" alt="" /></button>
      </div>
    )
  }
}

export default ChairsItem