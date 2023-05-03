
import React from 'react';
import Layout from './Components/Layout/layout.component';
import Home from './Pages/Home/home.page';
import AboutUs from './Components/About/Aboutus';
import PageNotFound from './Pages/NotFoundPage/pageNotFound.page';
import { Routes, Route} from 'react-router-dom';
import OneProduct from "./Pages/OneProduct/OneProduct.component";
import './App.css';
import AllProducts from "./Components/Chairs/Chairs/Chairs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products/:id" element={<OneProduct />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products" element={<AllProducts />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;