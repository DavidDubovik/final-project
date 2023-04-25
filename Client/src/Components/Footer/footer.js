import React from 'react';
import "./footer.scss";
import "./reset.scss";
import logo from "./img/LORI.png"
import gmail from "./img/gmail.png"
import arrow from "./img/arrow.png"
import insta from "./img/insta.png"
import facebook from "./img/facebook.png"
import Box from '@mui/material/Box';

import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        
            <>
                <footer className="footer">
                    <Box sx={{mx:'auto',maxWidth: 'lg'}}>
                    <div className="footer-information">
                        <div className="row">
                            <img src={logo} alt=""/>
                            <p className="row-text">Фабрика «LORI» – український виробник, європейська якість!</p>
                        </div>
                        <div className="row row_none">
                            <h4 className="row-info qewq">Інформація</h4>
                            <ul className="row-list">
                                <li><Link to="#">Про нас</Link></li>
                                <li><Link to="#">Партнерам</Link></li>
                                <li><Link to="#">Вакансії</Link></li>
                            </ul>
                        </div>
                        <div className="row">
                            <h4 className="row-info">Покупцям</h4>
                            <ul className="">
                                <li><Link to="#">Гарантія</Link></li>
                                <li><Link to="#">Оплата та доставка</Link></li>
                                <li><Link to="#">Обмін та повернення</Link></li>
                                <li><Link to="#">Кредит та оплата частинами</Link></li>
                            </ul>
                        </div>
                        <div className="row">
                            <h4 className="row-info">Контакти</h4>
                            <p className="row-text">м. Полтава, вул. Визволення, 26 info@lori.com.ua</p>
                        </div>
                        <div className="">
                            <div className="row-info lremrs">
                                <h4 className="row-info-text">Підписка на розсилку</h4>
                                <div className="gmail-img"><img src={gmail} alt=""/></div>
                            </div>
                            <div>
                                <div className="input-button">
                                    <input className="input" id="name" type="text" placeholder="E-mail"/>
                                    <button className="button-arr"><img src={arrow} alt=""/></button>


                                </div>
                            </div>
                            <div className="row-social row-info">
                                <h4 className="row-info-text">Стежте за нами</h4>
                                <Link to="#"><img className="img-insta" src={insta} alt=""/></Link>
                                <Link to="#"> <img src={facebook} alt=""/></Link>

                            </div>
                        </div>
                    </div>

                    <div className="strop"></div>

                    <p className="footer-row-text">© 1997-2020 Меблева фабрика «LORI».  Усі права захищені. </p>
                    </Box>
                </footer>
            </>
        
    )
}
