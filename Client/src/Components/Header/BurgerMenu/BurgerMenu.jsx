import React from 'react';
import "./BurgerMenu.scss";
import MenuDrop from '../ButtomMenu/MenuDrop/menudrop.component';
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const BurgerMenu = ({menuList}) => {
  return (
    <div className='burger header'>

        <div class="shared__container">
          <div class="header__inner">
            <nav class="nav">
              <ul class="nav__list">
                {menuList.map(el=><MenuDrop key={uuidv4()} mList={el} />)}
              </ul>
            </nav>
    
            <nav class="nav-mobile">
              <div className="nav-mobile__logo">
                    <img src="../../img/LORI_LOGO1.png" alt="" />
              </div>
              <div class="nav-mobile__content">
                <input id="menu-toggle" type="checkbox" />
                <label class='nav-mobile__container-menu menu-button-container' for="menu-toggle">
                  <div class='nav-mobile__button menu-button'></div>
                </label>
                
                    {menuList.map(el=>(<ul class="nav-mobile__menu menu" key={uuidv4()} mList={el}>
                      {menuList.map(el=><li className="nav__list-item" key={uuidv4()}> <Link href={el.path} component={NavLink} to={el.path} >{el.title}</Link></li>)}
                      </ul>))}
                  
              </div>
            </nav>
            </div>
        </div>
    </div>
  )
}

export default BurgerMenu


