import React from 'react';
import './PopularCategoriesItem.scss';
import { NavLink } from "react-router-dom";
import { useDispatch} from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  sortingProducts,
  changeCategory,
  setListColors,
  changeColor,
} from "../../../Redux/products.reducer";

const PopularCategoriesItem =({item})=> {
  const dispatch = useDispatch()
    const stateChangingFunc =()=>{
      dispatch(setMinPrice({ minPrice: 1 }))
      dispatch(setMaxPrice({ maxPrice: 50000 }));
      dispatch(changeColor({ brand: "" }));
    
      dispatch(changeCategory({ categories: item.link }));
    }
    return (
      <div className='popular-categories__item'  >
        <img className='popular-categories__item-img' src={"./img/" + item.img} alt="" />
        <h2 className='popular-categories__item-title'>{item.title}</h2>
        <p className='popular-categories__item-description'>{item.desc}</p>
        <NavLink className='popular-categories__item-button'  to={item.link} onClick={stateChangingFunc}>{item.info}</NavLink>
      </div>
    )

}

export default PopularCategoriesItem