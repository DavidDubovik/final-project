import React from 'react';
import { useFormik } from 'formik';

import StyllePage from "./StyllePage.scss";

function CartPage() {

  const validate = values => {
    const errors = {};

    if (!values.Name) {
      errors.Name = 'Ви повинні заповнити це поле';
    } else if (values.Name.length > 15) {
      errors.Name = 'Має бути 15 символів або менше';
    }

    if (!values.Number) {
      errors.Number = 'Ви повинні заповнити це поле';
    } else if (values.Number.length > 15) {
      errors.Number = 'Телефон мае містити лише цифри';
    }
 
    if (!values.Email) { 
      errors.Email = 'Ви повинні заповнити це поле'; 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) { 
      errors.Email = 'Невірна адреса електронної пошти!'; 
    }

    return errors;
  };

  const formik = useFormik({

    initialValues: {

      Name: '',

      Number: '',

      Email: ''

    },

    validate,

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

    },

  });

  return (
    <div className='Checkout-block'>

      <div className="checkout-contact">
        <h1 className='text-confirm'>Оформлення замовлення</h1>
        <p className='text-warn'>Будь ласка, заповніть форму. <br /> 
           Оберіть спосіб оплати та спосіб доставки
        </p>

        <div className="checkout-contact-fileds">
          <h1 className='contact-info'>Контактні дані</h1>

          <div className="input-fields">
          <p className='text-title-field'>Ім’я одержувача*</p>

          <input

            className='input-field-contact'

            id="Name"

            name="Name"

            type="text"

            placeholder='Ім’я одержувача'

            onChange={formik.handleChange}

            onBlur={formik.handleBlur}

            value={formik.values.Name}

          />

          {formik.errors.Name ? <div className='Error'>
            <img src="../../img/icons/Error.png" alt="error" />
            {formik.errors.Name}
          </div> : null}

          <p className='text-title-field'>Телефон*</p>

          <input

            className='input-field-contact'

            id="Number"

            name="Number"

            type="tel"

            placeholder='+380 (...)'

            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"

            onChange={formik.handleChange}

            onBlur={formik.handleBlur}

            value={formik.values.Number}

          />

          {formik.errors.Number ? <div className='Error'>
            <img src="../../img/icons/Error.png" alt="error" />
            {formik.errors.Number}
          </div> : null}

          <p className='text-title-field'>E-mail</p>

          <input

            className='input-field-contact'

            id="Email"

            name="Email"

            type="email"

            placeholder='E-mail'

            onChange={formik.handleChange}

            onBlur={formik.handleBlur}

            value={formik.values.Email}

          />

          {formik.errors.Email ? <div className='Error'>
            <img src="../../img/icons/Error.png" alt="error" />
            {formik.errors.Email}
          </div> : null}

          </div>
        </div>

        <div className="checkout-delivery">

          <div className="checkout-delivery-fileds">

            <h1 className='text-delivery'>Доставка та оплата</h1>

            <div class="tabs">
              <label className='text-title-block'>Спосіб доставки</label>
              <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked/>
              <label id='delivery' for="tab-btn-1">Кур’єром додому</label>
              <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
              <label id='delivery' for="tab-btn-2">Самовивіз</label>

              <div id="content-1">
                <div className="adress-block">
                  <h1 className='adress'>Адреса</h1>
                  <input className='adress-input' type="text" placeholder='Місто, вулиця, будинок, квартира'/>
                </div>
              </div>

              <div id="content-2">
                <div className="point-delivery">
                  <h1 className='adress'>Пункт видачі</h1>
                  <select name="delivery" id="select-delivery">
                    <option value="">м. Київ, ТЦ «4ROOM», Петропавлівська Борщагівка, вул.Петропавлівська, 6, 1 поверх. Тел.  +38 (098)470 75 06</option>
                  </select>
                </div>
              </div>
            </div>
    
            <div class="tabs-2">
              <label className='text-title-block'>Спосіб розрахунку</label>
              <input type="radio" name="tab-btn-2" id="tab-btn-3" value="" />
              <label id='pay-select' for="tab-btn-3">Банківською карткою онлайн</label>
              <input type="radio" name="tab-btn-2" id="tab-btn-4" value="" />
              <label id='pay-select' for="tab-btn-4">Готівкою або карткою при отриманні</label>

              <div id="content-3">
                
              </div>
              <div id="content-4">
                
              </div>
            </div>

            <p className='field-required'>*Поля, обяв’язкові до заповнення</p>

          </div>

          <div className="checkout-select-delivery">
          </div>

        </div>

      </div>
    </div>
  )
}

export default CartPage;