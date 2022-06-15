import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Route path="/" component={App}/>  
  </Router>
);

