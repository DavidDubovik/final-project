import React, { Component } from 'react'
import './PopularCategories.scss'
import PopularCategoriesItems from '../PopularCategoriesItems/PopularCategoriesItems'


export default class PopularCategories extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
        items: [
          {
            id: 1,
            title: "Столи",
            desc: "Вирізняються міцною та надійною конструкцією. Матеріал – дуб.",
            info: "Детальніше",
            img: "1.png",
            link:"tables"
          },
          {
            id: 2,
            title: "Ліжка",
            desc: "Матеріал – масив дуба. Комплектуються ортопедичною основою під матрац.",
            info: "Детальніше",
            img: "2.png",
            link:"beds"
          },
          {
            id: 3,
            title: "Корпусні меблі",
            desc: "Дубові етажерки, комоди, серванти на будь-який смак.",
            info: "Детальніше",
            img: "3.png",
            link:"housingfurniture"
          },
          {
            id: 4,
            title: "Стільці",
            desc: "Виготовлені з високоякісного масиву дуба. Комплектуються твердим або м’яким сидінням.",
            info: "Детальніше",
            img: "4.png",
            link:"chairs"
          }
        ]
      }
    }
  
    render() {
      return (
        <Box>
        <div className='popular-categories__wrapper'>
          <PopularCategoriesItems items={this.state.items}/>
        </div>
<<<<<<< HEAD

        </Box>
=======
>>>>>>> 21911400f3aff9b584472cb0b5cc1495188b2b00
      )
    }
  }