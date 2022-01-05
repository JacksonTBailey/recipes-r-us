import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import Recipes from './components/recipes';
import './scss/style.scss';

ReactDOM.render(
  <Router>
    <Recipes/>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
