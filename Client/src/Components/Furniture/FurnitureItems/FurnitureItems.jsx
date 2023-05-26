import React, { Component } from 'react'
import { FurnitureItem } from '../FurnitureItem/FurnitureItem'
import './FurnitureItems.scss'

export class FurnitureItems extends Component {
  
  render() {
    return (
      <>
        <div className='chairs'>
        {this.props.furniture.map(el => <FurnitureItem  key={el.id} furniture={el}/>)}
        </div>
      </>
    )
  }
}

export default FurnitureItems
