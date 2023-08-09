import React from 'react';
import Navbar from './component/Navbar';
import { Routes ,Route} from 'react-router-dom';
import Home from "./component/Home";
import About from './component/About';
import Contact from './component/Contact';

// import BuyCourse from './try/BuyCourse'
function App1() {
  return (
      <>
      <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </>
  )
}

export default App1
