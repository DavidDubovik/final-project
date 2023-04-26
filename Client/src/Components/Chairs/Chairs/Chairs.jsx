import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import ChairsItems from '../ChairsItems/ChairsItems';

import './Chairs.scss';

export default class Chairs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
      chairs: [
        {
          id: 1,
          title: "Стілець з масиву дуба ІСКУ",
          price: "1431",
          img: "1_chair.png"
        },
        {
          id: 2,
          title: "Стілець з масиву дуба УРБАНО",
          price: "1440",
          img: "2_chair.png"
        },
        {
          id: 3,
          title: "Стілець з масиву дуба Таллінн",
          price: "1479",
          img: "3_chair.png"
        },
        {
          id: 4,
          title: "Стілець з масиву дуба ДАНА",
          price: "1850",
          img: "4_chair.png"
        },
        {
          id: 5,
          title: "Стілець з масиву дуба ЛЮМІ",
          price: "1689",
          img: "5_chair.png"
        },
        {
          id: 6,
          title: "Стілець з масиву дуба МЕРІ",
          price: "1707",
          img: "6_chair.png"
        },
        {
          id: 7,
          title: "Стілець з масиву дуба ІНГО",
          price: "1726",
          img: "7_chair.png"
        },
        {
          id: 8,
          title: "Стілець з масиву дуба ЕКХОЛЬМ",
          price: "1730",
          img: "8_chair.png"
        },
        {
          id: 9,
          title: "Стілець з масиву дуба НОРД",
          price: "1750",
          img: "9_chair.png"
        },
        {
          id: 10,
          title: "Стілець з масиву дуба НІНА",
          price: "1795",
          img: "10_chair.png"
        },
        {
          id: 11,
          title: "Стілець з масиву дуба ДАНА",
          price: "2820",
          img: "11_chair.png"
        },
        {
          id: 12,
          title: "Стілець з масиву дуба САНДРА",
          price: "1841",
          img: "12_chair.png"
        },
        
      ]

    }
  }

  render() {
    return (
      <div className='wrapper'>
        <main>
          <div className='pageCategories, left'>
            <h2>Cтільці кухонні</h2>
            <div className='fiters'>
              <div className='fiters__item filters__price'>
                <h3 className='filters-price__price'>Price</h3>

                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[20,50]}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
                <div className='filters-price__slider'></div>
                <br />
                <div className='filters-price__container'>
                  <label className='filters-price__label'>
                    <input type="number" min="0" max="50000" placeholder='200' className='filters-price__input filters-price__info' />
                  </label>
                  <span className='filters-price__line'></span>
                  <label className='filters-price__label'>
                    <input type="number" min="0" max="50000" placeholder='1500' className='filters-price__input filters-price__info' />
                  </label>
                  <button type='button' className='filters-price__button'>OK</button>
                </div>
              </div>
            </div>
            

            <div className='filters-checkbox__container'>
              <h3>Матеріал</h3>
               
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Із суцільного дерева</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Комбіновані (дерево + метал)</span></label>
            </div>

            <div className='filters-checkbox__container'>
              <h3>Сидіння</h3>
               
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>З твердим сидінням</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>З м’яким сидінням</span></label>
            </div>

            <div className='filters-checkbox__container'>
              <h3>Висота</h3>
               
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>60–85 mm</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>більше 85 mm</span></label>
            </div>

            <div className='filters-checkbox__container'>
              <h3>Колір</h3>
               
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Дикий дуб</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Слонова кістка</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Медовий</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Ясен</span></label>
              <label className='filters-checkbox__item'><input type="checkbox"></input> <span className='filters-checkbox__info'>Морений</span></label>
            </div>
            
          </div>
          
          <div className='pageCategories, right'>
            <br/>
            <div className='filter-box'>
              <label className='filter-box__title'>Сортувати по: </label>
              <select className="filter">
                <option value="1">Filter_1</option>
                <option value="2">Filter_2</option>
                <option value="3">Filter_3</option>
                <option value="4">Filter_4</option>
              </select>
            </div>
            <br/>
            <br/>
            <ChairsItems chairs={this.state.chairs}/>
          </div>
        </main>
      </div>
    )
  }
}
