import React from 'react';
import "./BurgerMenu.scss";
import Menu from '../Menu/Menu';


function BurgerMenu() {
  const items =[{value: "intro", href:"/products"}, {value: "about", href:"/about"}]
  return (
    <div className='burger'>
        <nav className='burger-nav'>
            <div className="burger-btn">
                <span />
            </div>
        </nav>
          <Menu header={"Burger Menu"} items={items}/>
    </div>
  )
}

export default BurgerMenu