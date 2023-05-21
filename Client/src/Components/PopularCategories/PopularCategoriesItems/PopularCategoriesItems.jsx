import React, { Component } from 'react'
import PopularCategoriesItem from '../PopularCategoriesItem/PopularCategoriesItem'
import './PopularCategoriesItems.scss'
import Box from '@mui/material/Box';

export class PopularCategoriesItems extends Component {
  render() {
    return (
      <>
        <h2 className='popular-categories__title'>Популярні категорії</h2>
      
        <Box sx={{mx:'auto',maxWidth: 'lg',display:"flex",flexWrap:"wrap"}}>
          {this.props.items.map(el => <PopularCategoriesItem key={el.id} item={el}/>)}
        </Box>
      </>
    )
  }
}

export default PopularCategoriesItems