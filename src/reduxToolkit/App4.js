import React from 'react'
import "./style.css";
import Navbar from './component/Navbar';
import UserDetials from './component/UserDetials';
import { Provider } from 'react-redux';
import store from './store';
function App4() {
  return (
    <Provider store={store}>
      <Navbar/>
      <UserDetials/>
    </Provider>
  )
}

export default App4
