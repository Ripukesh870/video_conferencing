import React from 'react';
import Navbar from './dashBoad/Navbar';
import { Routes ,Route} from 'react-router-dom';
import Home from "./try/Home";
import About from './try/About';
import Contact from './try/Contact';
import Login from './try/Login';
import Singup from './try/Singup';
import Forget from './try/Forget';
import ChangePassword from './try/ChangePassword';
import BuyCourse from './try/BuyCourse';
import Footer from './try/Footer';
import { Provider } from 'react-redux';
import Store from './try/redux/Store';
import Setting from './try/Setting';
import Profile from './try/Profile';


// import BuyCourse from './try/BuyCourse'
function App1() {
  return (
      <Provider store={Store}>
        <Navbar name="Ripukesh"/>
        <Footer/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/login' Component={Login} />
          <Route path='/singup' Component={Singup}/>
          <Route path='/forget' Component={Forget}/>
          <Route path='/forget/changepassword' Component={ChangePassword} />
          <Route path='/buycourse' Component={BuyCourse} />
          <Route path='/profile' Component={Profile} />
          <Route path='/setting' Component={Setting} />
        </Routes>
      </Provider>
  )
}

export default App1
