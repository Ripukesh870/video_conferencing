// import { applyMiddleware } from "redux";
import Reducer from "./reducer/Reducer";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


const Store = configureStore({
    reducer: Reducer
    // applyMiddleware(thunk),
})


export default Store;