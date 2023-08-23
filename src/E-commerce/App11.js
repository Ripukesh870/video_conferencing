import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import CardDetials from './component/CardDetials'
import { Provider } from 'react-redux'
import { store } from './component/redux/store'
import toast, { Toaster } from 'react-hot-toast';

function App11() {
  return (
    <Provider store={store}>
        <Header/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CardDetials/>}/>
        </Routes>
        <Toaster/>
    </Provider>
  )
}

export default App11
