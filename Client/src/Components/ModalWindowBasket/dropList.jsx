import React, { useState } from 'react';
import './dropListStyle.css'
function DropList({ name, color }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleItemClick = (event) => {
        const clickedItem = event.target.textContent;
        setSelectedItem(clickedItem);
        setIsOpen(false);
    }

    return (
        <div  className={`dropdown ${isOpen ? 'active' : ''}`} >
            <div className={`default_option ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                <p> {selectedItem || 'Select an option'}</p>

            </div>
            {isOpen ? <ul className={`select_ul ${isOpen ? 'active' : ''}`}>
                <li onClick={handleItemClick}>Option 1</li>
                <li onClick={handleItemClick}>Option 2</li>
                <li onClick={handleItemClick}>Option 3</li>
                
            </ul> : ''}

        </div>
    );
}
export default DropList