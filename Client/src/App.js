
import React from "react";
import Slider from "./Components/Slider/slider";


import React from 'react';
import Layout from './Components/Layout/layout.component';
import Home from './Pages/Home/home.page';
import PageNotFound from './Pages/NotFoundPage/pageNotFound.page';
import { Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App;
