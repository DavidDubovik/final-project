import React, { Component } from 'react'
import { FurnitureItem } from '../FurnitureItem/FurnitureItem'
import './FurnitureItems.scss'
import { v4 as uuidv4 } from 'uuid';

export class FurnitureItems extends Component {
  
  render() {
    return (
      <>
        <div className='chairs'>
        {this.props.furniture.map(el => <FurnitureItem  key={uuidv4()} furniture={el}/>)}
        </div>
      </>
    )
  }
}

export default FurnitureItems
