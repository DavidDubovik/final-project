import React, { Component } from 'react';
import './ChairsItem.scss';

export class ChairsItem extends Component {

   info() {
    console.log(EventTarget)
   }
  
  render() {
    return (
      <div className='chair'>
        <div className='chair-img__container'>
            <img src={"./img/" + this.props.chair.img} alt="" />
        </div>
        <p className='chair__title'>
            {this.props.chair.title}
        </p>
        <p className='chair__price'>{this.props.chair.price} <span className='chair__currency'>грн</span></p>
        <button type='button' className='chair__button' onClick={() => this.info()}>У кошик <img src="./img/cart_icon.png" alt="" /></button>
      </div>
    )
  }
}

export default ChairsItem