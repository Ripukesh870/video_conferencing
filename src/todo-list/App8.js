import React from 'react'
import ToDo from './ToDo'
import { Provider } from 'react-redux'
import store from './store/Store'


function App8() {
  return (
    <Provider store={store}>
        <ToDo/>
    </Provider>
  )
}

export default App8
