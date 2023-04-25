import React, { Component } from 'react'
import Item from '../Item/Item'
import './Items.scss'

export class Items extends Component {
  render() {
    return (
      <>
        <h2 className='popular-categories__title'>Популярні категорії</h2>
      
        <div className='items'>
          {this.props.items.map(el => <Item key={el.id} item={el}/>)}
        </div>
      </>
    )
  }
}

export default Items