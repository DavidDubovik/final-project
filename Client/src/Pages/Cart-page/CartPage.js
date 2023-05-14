import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardProduct } from "../../Components/ModalWindowBasket/cardProduct.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import StyllePage from "./StyllePage.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "#F9F9FB",
  p: 2,
};

function CartPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const basket = useSelector((state) => {
    return state.products.basket;
  });

  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify([basket]));
  // }, [basket]);

  console.log(basket);

  const modalOpen = useSelector((state) => {
    return state.products.isModal;
  });

  const [saveAllPrice, setSaveAllPrice] = useState(0);

  function DataCleansing() {
    localStorage.removeItem("basket");
    dispatch({ type: "CLEAR_BASKET" });
  }

  const validate = (values) => {
    const errors = {};

    if (!values.Name) {
      errors.Name = "Ви повинні заповнити це поле";
      setOpen(false);
    } else if (values.Name.length > 15) {
      errors.Name = "Має бути 15 символів або менше";
    }

    if (!values.Number) {
      errors.Number = "Ви повинні заповнити це поле";
      setOpen(false);
    } else if (values.Number.length > 15) {
      errors.Number = "Телефон мае містити лише цифри";
    }

    if (!values.Email) {
      errors.Email = "Ви повинні заповнити це поле";
      setOpen(false);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Невірна адреса електронної пошти!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Name: "",

      Number: "",

      Email: "",
    },

    validate,
  });

  return (
    <div className="Checkout-block">
      <div className="checkout-contact">
        <h1 className="text-confirm">Оформлення замовлення</h1>
        <p className="text-warn">
          Будь ласка, заповніть форму. <br />
          Оберіть спосіб оплати та спосіб доставки
        </p>

        <div className="checkout-contact-fileds">
          <h1 className="contact-info">Контактні дані</h1>

          <div className="input-fields">
            <form onSubmit={formik.handleSubmit}>
              <p className="text-title-field">Ім’я одержувача*</p>

              <input
                className="input-field-contact"
                id="Name"
                name="Name"
                type="text"
                placeholder="Ім’я одержувача"
                onChange={formik.handleChange}
                value={formik.values.Name}
              />

              {formik.errors.Name ? (
                <div className="Error">
                  <img src="../../img/icons/Error.png" alt="error" />
                  {formik.errors.Name}
                </div>
              ) : null}

              <p className="text-title-field">Телефон*</p>

              <input
                className="input-field-contact"
                id="Number"
                name="Number"
                type="text"
                placeholder="+380 (...)"
                onChange={formik.handleChange}
                value={formik.values.Number}
              />

              {formik.errors.Number ? (
                <div className="Error">
                  <img src="../../img/icons/Error.png" alt="error" />
                  {formik.errors.Number}
                </div>
              ) : null}

              <p className="text-title-field">E-mail</p>

              <input
                className="input-field-contact"
                id="Email"
                name="Email"
                type="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />

              {formik.errors.Email ? (
                <div className="Error">
                  <img src="../../img/icons/Error.png" alt="error" />
                  {formik.errors.Email}
                </div>
              ) : null}

              {/* <button type='submit' className='confirm-pay'>підтвердити замовлення</button> */}
            </form>
          </div>
        </div>

        <div className="checkout-delivery">
          <div className="checkout-delivery-fileds">
            <h1 className="text-delivery">Доставка та оплата</h1>

            <div class="tabs">
              <label className="text-title-block">Спосіб доставки</label>
              <input type="radio" name="tab-btn" id="tab-btn-1" value="" />
              <label id="delivery" for="tab-btn-1">
                Кур’єром додому
              </label>
              <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
              <label id="delivery" for="tab-btn-2">
                Самовивіз
              </label>

              <div id="content-1">
                <div className="adress-block">
                  <h1 className="adress">Адреса</h1>
                  <input
                    className="adress-input"
                    type="text"
                    placeholder="Місто, вулиця, будинок, квартира"
                  />
                </div>

                <div className="title-delivery-block">
                  <p className="title-delivery">
                    Доставка <span className="title-delivery">150 грн</span>
                  </p>
                </div>
              </div>

              <div id="content-2">
                <div className="point-delivery">
                  <h1 className="adress">Пункт видачі</h1>
                  <select name="delivery" id="select-delivery">
                    <option value="">
                      м. Київ, ТЦ «4ROOM», Петропавлівська Борщагівка,
                      вул.Петропавлівська, 6, 1 поверх. Тел. +38 (098)470 75 06
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="tabs-2">
              <label className="text-title-block">Спосіб розрахунку</label>
              <input
                type="radio"
                name="tab-btn-2"
                id="tab-btn-3"
                value=""
                required
              />
              <label id="pay-select" for="tab-btn-3">
                Банківською карткою онлайн
              </label>
              <input
                type="radio"
                name="tab-btn-2"
                id="tab-btn-4"
                value=""
                required
              />
              <label id="pay-select" for="tab-btn-4">
                Готівкою або карткою при отриманні
              </label>

              <div id="content-3"></div>
              <div id="content-4"></div>
            </div>

            <p className="field-required">*Поля, обяв’язкові до заповнення</p>
          </div>
        </div>
      </div>

      <div className="selected-products-basket">
        <form onSubmit={formik.handleSubmit}>
          {basket.length ? (
            <div className="product">
              <div className="header">
                <h1 className="title-header-products">Товари у кошику</h1>
              </div>
              <div className="main">
                <div className="basket-product">
                  {basket.map(
                    ({
                      name,
                      currentPrice,
                      imageUrls,
                      colors,
                      itemNo,
                      selectedQuantiy,
                      color,
                      counter,
                      count,
                    }) => {
                      return (
                        <CardProduct
                          id={itemNo}
                          name={name}
                          price={currentPrice}
                          imageUrls={imageUrls}
                          allPrice={saveAllPrice}
                          setAllPrice={setSaveAllPrice}
                          item={itemNo}
                          quantiy={counter}
                        />
                      );
                    }
                  )}
                </div>

                <div className="sum">
                  <p>
                    Сума замовлення{" "}
                    <span className="title-price">{saveAllPrice} грн</span>
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={handleOpen}
                  className="confirm-pay"
                >
                  підтвердити замовлення
                </button>
              </div>
            </div>
          ) : (
            <h1 style={{ margin: "0 auto", width: 200, fontSize: 30 }}>
              {" "}
              товарів немає{" "}
            </h1>
          )}
        </form>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Дякуємо, що вибрали нас!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ваше замовлення №3265897 успішно оформлене. <br />
              Чекайте на дзвінок від нашого фахівця.
            </Typography>
            <Link to={"/products"}>
              <button onClick={() => DataCleansing()} className="btn-continue">
                Продовжити покупки
              </button>
            </Link>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default CartPage;
