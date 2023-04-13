import React, { Component } from 'react';
import './Item.scss';

export class Item extends Component {

    info() {
        console.log('info')
    }

  
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <button onClick={() => this.info()}>{this.props.item.info}</button>
      </div>
    )
  }
}

export default Item