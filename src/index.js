import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';    // simple wabpage 
// import './App.css';
// import App1 from './App1';    //simple webpage  
// import App2 from "./app2/App2"   
// import App3 from './videoCall/App3'; // video confarance app using zegocloud
// import App4 from './reduxToolkit/App4';    // add user with redux toolkit
// import App5 from './imageSearch.js/App5';
// import App7 from './CounterReduxToolkit/App7'; //Counter with redux toolkit
// import App8 from './todo-list/App8';     // To-do List with redux toolkit
// import App9 from './cart/App9';
// import F from './flag/F';
//  import App10 from './SearchEng/App10';
import App11 from './E-commerce/App11';    //add to cart with redux toolkit

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    {/* <App /> */}
    {/* <App1/> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    {/* <App5/> */}
    {/* <App7/> */}
    {/* <App8/> */}
    {/* <App9/> */}
    {/* <F/> */}
    {/* <App10/> */}
    <App11/>
  </BrowserRouter>
);