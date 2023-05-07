import React, { useState } from 'react';
import './dropListStyle.css'
function DropList({ colorType, upholstery }) {
    // console.log(nameType);
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
    const Li = () => {
        return (
            colorType ? colorType.map((color) => {
                return (
                    <li onClick={handleItemClick}><div style={{ display: 'none' }}></div>{color}</li>
                )
            })
                : ''
        )
    }
    const LiOr = () => {
        return (
            upholstery ? upholstery.map((color) => {
                return (
                    <li onClick={handleItemClick}><div style={{ display: 'none' }}></div>{color}</li>
                )
            })
                : '-'
        )
    }
    console.log(colorType);
    return (
        <>
            {colorType || upholstery ? <div className={`dropdown ${isOpen ? 'active' : ''}`} >
                <div className={`default_option ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                    <p>{selectedItem.color ? <div style={{ background: selectedItem.color }}></div> : ''} {selectedItem.text || selectedItem.text}</p>

                </div>
                {
                    isOpen ? <ul className={`select_ul ${isOpen ? 'active' : ''}`}>

                        {colorType ? <Li /> : <LiOr />}
                        {/* <li onClick={handleItemClick}><div style={{ background: selectedItem.color ? selectedItem.color : 'red' }}></div>few</li> */}
                    </ul> : ''
                }

            </div > : <div className='line' > <p>____</p></div>}
        </>

    );
}
export default DropList