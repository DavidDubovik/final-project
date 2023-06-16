import React from 'react';
import './PopularCategoriesItem.scss';
import { NavLink } from "react-router-dom";


const PopularCategoriesItem =({item})=> {

    return (
      <div className='popular-categories__item'  >
        <img className='popular-categories__item-img' src={"./img/" + item.img} alt="" />
        <h2 className='popular-categories__item-title'>{item.title}</h2>
        <p className='popular-categories__item-description'>{item.desc}</p>
        <NavLink className='popular-categories__item-button'  to={item.link} >{item.info}</NavLink>
      </div>
    )

}

export default PopularCategoriesItem