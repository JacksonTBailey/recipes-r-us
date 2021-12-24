import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './components/recipes';
import './scss/style.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/*" element={<Recipes/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
