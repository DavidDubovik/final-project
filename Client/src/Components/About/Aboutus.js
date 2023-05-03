import React from 'react';
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

import "./reset.scss";
import "./About.scss";


export default function Aboutus() {
    return (
        <>

        <div className="container">
            <div className="about-us">
                <h1 className='title_about_us'>Про нас</h1>
                <p className="text">Деревообробне підприємство LORI засноване у 1997 році у м. Полтава у центральній частині України. Географічне розташування підприємства є сприятливим для розвитку деревообробної галузі, оскільки поблизу Полтави розташовані значні лісові масиви твердо листяних та хвойних порід дерев. Компанія LORI використовує у своєму виробництві виключно дуб, оскільки ця порода цінується не лише на території України, а й у всьому світі. Сировина підприємство скуповує з усієї Полтавської області на державному аукціоні, тому можна бути впевненим у екологічності, відповідності радіаційним нормам та легальності використовуваної сировини. Купівля офіційної сировини означає повну оплату податків у державу, а також те, що на місці вирубаної ділянки лісу буде посаджено нові лісові масиви.</p>
                <img className="img3" src={img3} alt=""/>
            </div>

            <div className="about-us">
                <div className="image">
                    <h3 className="title_about">КОМПАНІЯ LORI ВІДОМА СВОЄЮ ПРОДУКЦІЄЮ ЯК В УКРАЇНІ, ТАК І ДАЛЕКО ЗА ЇЇ МЕЖАМИ.</h3>
                    <p className="text">Ми маємо власну мережу фірмових магазинів LORI в Україні та розширену дилерську мережу. За кордоном наші меблі можна зустріти в таких країнах як Німеччина, Польща, Литва, Латвія, Естонія, Швейцарія, Фінляндія та інші. Наші меблі можна зустріти у великих меблевих центрах, інтернет-магазинах та закладах громадського харчування. Нашу якість давно оцінили експортери, тож ми постійно отримуємо нові пропозиції співробітництва. Меблі нашого виробництва втілили в собі сучасні тенденції, високу якість, а головне екологічність. У чому можете переконатися, і ви! LORI - світ стає комфортним!</p>
                    <div className="images">
                        <img className="img" src={img1} alt=""/>
                        <img className="img" src={img2} alt=""/>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
