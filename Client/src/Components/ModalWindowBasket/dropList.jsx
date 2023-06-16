import React, { useState } from 'react';
import './dropListStyle.css'
function DropList({ colorType, upholstery, colorValue }) {
    // console.log(nameType);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ text: colorValue ? colorValue : 'оберіть колір ', color: colorValue ? colorValue : '' });

    // const obj = {
    //     green: 'зелений',
    //     yellow: 'жовтий',
    //     red: 'червоний '
    // }
    // const TestElement = () => {

    //     for (let key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             console.log(key);
    //             console.log(obj[key]);
    //             // console.log(key + ': ' + obj[key]);
    //         }
    //     }

    // }
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
                    <li onClick={handleItemClick}><div style={{ background: color, border: '0.5px solid rgba(0, 0, 0, 0.5)' }}></div>{color}</li>
                )
            })
                : ''
        )
    }
    const LiUpholstery = () => {
        return (
            upholstery ? upholstery.map((color) => {
                return (
                    <li onClick={handleItemClick}><div style={{ display: 'none' }}></div>{color}</li>
                )
            })
                : '-'
        )
    }

    return (
        <>
            {/* {TestElement()} */}
            {colorType || upholstery ? <div className={`dropdown ${isOpen ? 'active' : ''}`} >
                <div className={`default_option ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                    <p>{selectedItem.color ? <div style={{ background: selectedItem.color, border: '0.5px solid rgba(0, 0, 0, 0.5)' }}></div> : ''} {selectedItem.text || selectedItem.text}</p>

                </div>
                {
                    isOpen ? <ul className={`select_ul ${isOpen ? 'active' : ''}`}>

                        {colorType ? <Li /> : <LiUpholstery />}

                        {/* <li onClick={handleItemClick}><div style={{ background: selectedItem.color ? selectedItem.color : 'red' }}></div>few</li> */}
                    </ul> : ''
                }

            </div > : <div className='line' > <p>____</p></div>}
        </>

    );
}
export default DropList