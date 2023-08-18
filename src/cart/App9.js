import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Post from './component/Post'
import CreatePost from './component/CreatePost'
import { Provider } from 'react-redux'
import store from './redux/store'
function App9() {
  return (
    <Provider store={store}>
      
      <div className="container">
        <Routes>
            <Route path='/' element={<Post/>}/>
            <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </div>
    </Provider>
  )
}

export default App9
