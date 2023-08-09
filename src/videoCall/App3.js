import React from 'react'
import Home from "./Home"
import { Route,Routes } from 'react-router-dom'
import Room from './Room'


function App3() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/room/:roomID' element={<Room/>}/>
        </Routes>
    </>
  )
}

export default App3;
