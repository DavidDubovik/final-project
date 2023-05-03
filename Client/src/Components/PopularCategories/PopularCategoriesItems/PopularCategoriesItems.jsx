import React, { Component } from 'react'
import PopularCategoriesItem from '../PopularCategoriesItem/PopularCategoriesItem'
import './PopularCategoriesItems.scss'

export class PopularCategoriesItems extends Component {
  render() {
    return (
      <>
        <h2 className='popular-categories__title'>Популярні категорії</h2>
      
        <div className='popular-categories__items'>
          {this.props.items.map(el => <PopularCategoriesItem key={el.id} item={el}/>)}
        </div>
      </>
    )
  }
}

export default PopularCategoriesItems