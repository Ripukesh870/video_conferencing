import React from 'react'
// import "./style.css";
// import Navbar from './component/Navbar';
// import UserDetials from './component/UserDetials';
import { Provider } from 'react-redux';
import store from './store/Store';
import App6 from './App6';
function App7() {
  return (
    <Provider store={store}>
      <App6/>
    </Provider>
  )
}

export default App7;