import React, { Component } from 'react';
import './PopularCategoriesItem.scss';

export class PopularCategoriesItem extends Component {

    info() {
        console.log('info')
    }

  
  render() {
    return (
      <div className='popular-categories__item'>
        <img className='popular-categories__item-img' src={"./img/" + this.props.item.img} alt="" />
        <h2 className='popular-categories__item-title'>{this.props.item.title}</h2>
        <p className='popular-categories__item-description'>{this.props.item.desc}</p>
        <button className='popular-categories__item-button' onClick={() => this.info()}>{this.props.item.info}</button>
      </div>
    )
  }
}

export default PopularCategoriesItem