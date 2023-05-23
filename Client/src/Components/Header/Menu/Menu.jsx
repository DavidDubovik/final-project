import React from 'react';
import './Menu.scss'

const Menu = ({header, items}) => {
  return (
    <div className="menu">
      <div className="menu__content">
        <div className="menu__header"></div>
        <ul>
          {items.map(item=><li>
            <a href={item.href}>{item.value}</a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Menu