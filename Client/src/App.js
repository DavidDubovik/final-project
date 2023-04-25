
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout/layout.component';
import Home from './Pages/Home/home.page';
import PageNotFound from './Pages/NotFoundPage/pageNotFound.page';
import OneProduct from "./Pages/OneProduct/OneProduct.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products/one" element={<OneProduct />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;