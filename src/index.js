import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Recipes from './components/recipes';
import './scss/style.scss';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path = "/*" element={<Recipes/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
