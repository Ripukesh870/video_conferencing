import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App1 from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    {/* <App /> */}
    <App1/>
    
  </BrowserRouter>
);