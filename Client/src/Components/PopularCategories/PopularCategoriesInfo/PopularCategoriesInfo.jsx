import React, { Component } from 'react'
import './PopularCategoriesInfo.scss'
import Items from '../Items/Items'
import Box from '@mui/material/Box';

export default class PopularCategoriesInfo extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
        items: [
          {
            id: 1,
            title: "Столи",
            desc: "Вирізняються міцною та надійною конструкцією. Матеріал – дуб.",
            info: "Детальніше",
            img: "1.png"
          },
          {
            id: 2,
            title: "Ліжка",
            desc: "Матеріал – масив дуба. Комплектуються ортопедичною основою під матрац.",
            info: "Детальніше",
            img: "2.png"
          },
          {
            id: 3,
            title: "Корпусні меблі",
            desc: "Дубові етажерки, комоди, серванти на будь-який смак.",
            info: "Детальніше",
            img: "3.png"
          },
          {
            id: 4,
            title: "Стільці",
            desc: "Виготовлені з високоякісного масиву дуба. Комплектуються твердим або м’яким сидінням.",
            info: "Детальніше",
            img: "4.png"
          }
        ]
      }
    }
  
    render() {
      return (
        <Box sx={{fontFamily:'Open Sans',mx:'auto',maxWidth: 'lg'}}>
        <div className='wrapper'>
          <Items items={this.state.items}/>
        </div>
        </Box>
      )
    }
  }