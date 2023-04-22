import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./modalWindow.scss"
import { colors } from '@mui/material';

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1010,
    width: 1010,
    background: '#FFFFFF',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
}
export function KeepMountedModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState({

        products: [
            {
                "name": "Стілець обідній Юля горіх темний/сірий",
                "price": '1000',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/326/P1/monolith_61-702x467.jpg",
                "id": "00110010",
                "category": "tires",

            },
            {
                "name": "Ліжко-диван прямий Меблі Прогрес Кельн темно-сірий темно-сірий 1520x920x890 мм",
                "decription": "бла-бла-бла-бла",
                "price": '12 246',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/492/P2/alabama_light_grey-702x467.jpg",
                "id": "11001441",
                "category": "tires",

            },
            {
                "name": "Лейзі лежанка для тварин",
                "decription": "бла-бла-бла-бла",
                "price": '1834',
                'newPrice': '1000',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/212/P2/california_flamingo-702x467.jpg",
                "id": "110011",
                "category": "tires",
                'discount': true

            },
            {
                "name": "Обідній стіл у стилі лофт Серія 1 1200х600 мм",
                "decription": "бла-бла-бла-бла ",
                "price": '2834',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/334/_MG_0983-702x467h.jpg",
                "id": "0001111",
                "category": "tires",
                "newProduct": true
            }
        ]
    })


    const [basket, setBasket] = useState(state.products)
    const product = basket.map(({ name, id, price, img_url }) => {
        return (<div className='cardProduct'>
            <button className='dagger'>+</button>
            <img src={img_url} alt="#" width="100" height="100" />
            <div className='name-product'>
                <h3>{name.substring(0, 25)}</h3>
                <span>Код:{id}</span>
            </div>
            <div className='select'>
                <select className='color'>
                    <option value="all" data-before="&#xf26e">All</option>
                    <option value="open">Open</option>
                    <option value="done">Done</option>
                </select>
                <select className="Upholstery" >
                    <option value="all" > Дикий дуб</option>
                    <option value="open"> Open</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div className='container'>
                <button id='decrement' >-</button>
                <input type='number' min='0' max='20' id='my-input' value={Number('fe')} step='1' readOnly />
                <button id='increment' >+</button>
            </div>
            <div className='text-price'>
                <span >
                    {price} грн
                </span>
            </div>
        </div>)
    })
    return (
        <div>
            <Button onClick={handleOpen} >Open modal</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={styleBox}>

                    {basket.length ? <div className='product'>
                        <div className='header'><h1>Товар доданий у кошик</h1> <a href="/">Перейти у кошик</a></div>
                        <div className='main'>

                            <div className='basket-product'>
                                {product}
                            </div>

                            <hr style={{ background: '#007042', height: 2, border: 'none' }}></hr>
                            <div className='sum'>
                                <p>Всього у кошику {basket.length} товари на суму <span>5000 грн</span></p>

                            </div>
                        </div>
                        <div className='footer'><h3>продовжити покупки</h3> <Button>Оформити замовлення</Button></div>
                    </div> : <h1 style={{ margin: '0 auto', width: 200 }}> товарів немає </h1>}
                </Box>
            </Modal>
        </div >
    );
}
;