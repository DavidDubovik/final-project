import React, { Component } from 'react'
import Item from '../Item/Item'
import './Items.scss'

export class Items extends Component {
  render() {
    return (
      <>
        <h1>Популярні категорії</h1>
      
        <div className='items'>
        {this.props.items.map(el => <Item key={el.id} item={el}/>)}
      </div>
      </>
    )
  }
}

export default Items