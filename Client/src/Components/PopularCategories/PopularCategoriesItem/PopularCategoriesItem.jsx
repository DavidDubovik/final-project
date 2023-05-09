import React, { Component } from 'react';
import './PopularCategoriesItem.scss';
import { NavLink } from "react-router-dom";

const PopularCategoriesItem =({item})=> {

    return (
      <div className='popular-categories__item'  component={NavLink} to={item.link}>
        <img className='popular-categories__item-img' src={"./img/" + item.img} alt="" />
        <h2 className='popular-categories__item-title'>{item.title}</h2>
        <p className='popular-categories__item-description'>{item.desc}</p>
        <button className='popular-categories__item-button' >{item.info}</button>
      </div>
    )

}

export default PopularCategoriesItem