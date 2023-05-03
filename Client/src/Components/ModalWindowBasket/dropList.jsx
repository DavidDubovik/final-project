import React, { useState } from 'react';
import './dropListStyle.css'
function DropList({ nameType, upholstery }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ text: 'оберіть колір', color: '' });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleItemClick = (event) => {
        const clickedItem = event.target.textContent;
        const div = event.target.querySelector('div')
        setSelectedItem({ text: clickedItem, color: div.style.background });
        setIsOpen(false);
    }

    return (
        <div className={`dropdown ${isOpen ? 'active' : ''}`} >
            <div className={`default_option ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                <p>{selectedItem.color ? <div style={{ background: selectedItem.color }}></div> : ''} {selectedItem.text || selectedItem.text}</p>

            </div>
            {isOpen ? <ul className={`select_ul ${isOpen ? 'active' : ''}`}>

                <li onClick={handleItemClick}><div style={{ background: selectedItem.color ? selectedItem.color : 'red' }}></div>option</li>
            </ul> : ''}

        </div>
    );
}
export default DropList