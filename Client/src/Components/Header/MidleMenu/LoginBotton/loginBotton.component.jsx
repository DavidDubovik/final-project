import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { useDispatch} from "react-redux";
import {
  loginCustomerFetch,
  createAccountFetch,
} from "../../../../Redux/login.reducer";
import "./login.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 387,
  background: "#fff",
  p: 2,
};

const LoginButton = () => {
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [loginRes, setRes] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleClose2Login = () => setOpenLogin(false);
  const dispatch = useDispatch();

  const myLoginFunc = ({ email, password }) => {
    const data = {
      email: formik.values.email,
      password: formik.values.passwordLogin,
    };
    handleClose();
    dispatch(loginCustomerFetch(data)).then(res => setRes(JSON.stringify(res.payload.password))).then(()=>handleOpenLogin());
    
    
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName ) {
      errors.firstName = "Ви повинні заповнити це поле";
    } else if (values.firstName.length < 3 ) {
      errors.firstName = "Має бути більше 3 символів";
    }

    if (!values.lastName) {
      errors.lastName = "Ви повинні заповнити це поле";
    } else if (values.lastName.length <3 ) {
      errors.lastName = "Має бути більше 3 символів!";
    }

    if (!values.email) {

      errors.email = "Ви повинні заповнити це поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email.length>0
    ) {
      errors.email = "Невірна адреса електронної пошти!";
    }

    if (!values.emailConfirm ) {
      errors.emailConfirm = "Ви повинні заповнити це поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailConfirm)
    ) {
      errors.emailConfirm = "Невірна адреса електронної пошти!";
    }

    if (!values.passwordLogin ) {

      errors.passwordLogin = "Ви повинні заповнити це поле";
    } else if (values.passwordLogin.length > 7 ) {
      errors.passwordLogin = "Пароль меньше 7 символів!";
    }

    if (!values.pass ) {
      errors.pass = "Ви повинні заповнити це поле";
    } else if (values.pass.length <7 && values.pass.length>0) {
      errors.pass = "Пароль може > 7 символів!";
    }

    if (!values.passConfirm ) {
      errors.passConfirm = "Ви повинні заповнити це поле";
    } else if ((values.passConfirm !== values.pass) ) {
      errors.passConfirm = "Паролі не співпадають!";
    }

    return errors;
  };

  function switchTab() {
    const tabs = document.querySelectorAll(".tab");

    const contents = document.querySelectorAll(".content");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", (event) => {
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
          tabsChildren[t].classList.remove("tab--active");
        }

        tabs[i].classList.add("tab--active");

        let tabContentChildren =
          event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
          tabContentChildren[c].classList.remove("content--active");
        }

        contents[i].classList.add("content--active");
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      emailConfirm: "",

      passwordLogin: "",

      pass: "",

      passConfirm: "",
    },

    validate,

    onSubmit: (values) => {
      console.log("Formik submit", values);
      alert("aas");
      // dispatch(createAccountFetch)
    },
  });
  const data = {
    email: formik.values.email,
    password: formik.values.passwordLogin,
  };
  return (
    <>
      <Box
        component={Link}
        to="#"
        sx={{ display: "flex", height: 57, width: 122, alignItems: "center" }}
        alignItems="stretch"
      >
        <Modal
          open={openLogin}
          onClose={handleClose2Login}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {loginRes}
            </Typography>
          </Box>
        </Modal>
        <Avatar
          sx={{
            width: 36,
            height: 36,
            border: "2px solid #57646E",
            backgroundColor: "white",
            color: "#57646E",
          }}
        ></Avatar>
        <Button
          onClick={handleOpen}
          sx={{
            "&:hover, active": {
              color: "#007042",
            },
          }}
        >
          <Typography
            sx={{
              minWidth: 100,
              color: "#57646E",
              fontSize: "14px",
              textTransform: "capitalize",
              "&:hover, active": {
                color: "#007042",
              },
            }}
          >
            Увійти
          </Typography>
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <ul className="container--tabs">
              <li onClick={switchTab} className="tab tab--active">
                Увійти
              </li>
              <li onClick={switchTab} className="tab">
                Реєстрація
              </li>
            </ul>

            <div className="container--content">
              <div className="border">
                <hr className="border-line" />
              </div>

              <div className="content content--active">
                <form
                  id="login"
                  className="input-group"
                  onSubmit={formik.handleSubmit}
                >
                  <p className="text-notice">
                    Будь ласка, введіть дані свого <br /> облікового запису, щоб
                    увійти
                  </p>

                  <p className="text-title">E-mail</p>

                  <input
                    className="input-field"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  {formik.errors.email && formik.touched.email ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <p className="text-title">Пароль</p>

                  <input
                    className="input-field"
                    id="passwordLogin"
                    name="passwordLogin"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordLogin}
                  />

                  {formik.errors.passwordLogin && formik.touched.passwordLogin ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.passwordLogin}
                    </div>
                  ) : null}

                  <Link to="#">
                    <p className="text-remember">Нагадати пароль</p>
                  </Link>

                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={() => {
                      myLoginFunc(data);
                    }}
                  >
                    УВІЙТИ
                  </button>

                </form>
              </div>

              <div className="content">
                <form
                  id="register"
                  className="input-group_2"
                  onSubmit={formik.onSubmitLogin}
                >
                  <p className="text-title">Ім’я</p>

                  <input
                    className="input-field"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Ваше ім’я"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.firstName}
                    </div>
                  ) : null}

                  <p className="text-title">Прізвище</p>

                  <input
                    className="input-field"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Ваше прізвище"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.lastName  && formik.touched.lastName ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.lastName}
                    </div>
                  ) : null}

                  <p className="text-title">E-mail</p>

                  <input
                    className="input-field"
                    id="emailConfirm"
                    name="emailConfirm"
                    type="email"
                    placeholder="E-mail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.emailConfirm}
                  />

                  {formik.errors.emailConfirm && formik.touched.emailConfirm ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.emailConfirm}
                    </div>
                  ) : null}

                  <p className="text-title">Пароль</p>

                  <input
                    className="input-field"
                    id="pass"
                    name="pass"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                  />

                  {formik.errors.pass && formik.touched.pass ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.pass}
                    </div>
                  ) : null}

                  <p className="text-title">Підтвердження пароля</p>

                  <input
                    className="input-field"
                    id="passConfirm"
                    name="passConfirm"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passConfirm}
                  />

                  {formik.errors.passConfirm && formik.touched.passConfirm ? (
                    <div className="Error">
                      <img src="../../img/icons/Error.png" alt="error" />
                      {formik.errors.passConfirm}
                    </div>
                  ) : null}

                  <br />

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const dataZ = {
                        firstName: formik.values.firstName,
                        lastName: formik.values.lastName,
                        email: formik.values.emailConfirm,
                        password: formik.values.pass,
                      };
                      // alert(dataZ)
                      dispatch(createAccountFetch(dataZ));
                    }}
                    type="submit"
                    className="submit-btn btn-2"
                  >
                    ЗАРЕЄСТРУВАТИСЯ
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div onClick={handleClose} className="btn-close"></div>
        </Box>
      </Modal>
    </>
  );
};

export default LoginButton;
