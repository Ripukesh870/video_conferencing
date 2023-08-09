import { configureStore } from "@reduxjs/toolkit"
import todoslice from "./TodoSlice"

const store=configureStore({
    reducer:{
        todo:todoslice,
    }
})

export default store;