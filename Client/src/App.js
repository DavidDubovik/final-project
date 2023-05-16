import React, { useEffect } from 'react';
import Layout from './Components/Layout/layout.component';
import Home from './Pages/Home/home.page';
import AboutUs from './Components/About/Aboutus';
import PageNotFound from './Pages/NotFoundPage/pageNotFound.page';
import { Routes, Route } from 'react-router-dom';
import OneProduct from "./Pages/OneProduct/OneProduct.component";
import store,{persistor} from './Redux/store';
import './App.css';
import { Provider } from "react-redux";
import CartPage from "./Pages/Cart-page/CartPage";
import { PersistGate } from 'redux-persist/integration/react';
import AllProducts from "./Components/Furniture/Furniture/Furniture";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/cart-page' element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/products/:id" element={<OneProduct />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/categories/:categorie" element={<AllProducts />} />
            <Route path="/search/:query" element={<AllProducts />} />
          </Route>
        </Routes>
        </PersistGate>
      </Provider>
    </div >
  );
}
export default App;