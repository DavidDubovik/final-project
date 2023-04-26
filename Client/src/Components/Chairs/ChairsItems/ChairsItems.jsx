import React, { Component } from 'react'
import { ChairsItem } from '../ChairsItem/ChairsItem'
import './ChairsItems.scss'

export class ChairsItems extends Component {
  
  render() {
    return (
      <>
        <div className='chairs'>
        {this.props.chairs.map(el => <ChairsItem  key={el.id} chair={el}/>)}
        </div>
      </>
    )
  }
}

export default ChairsItems

// 