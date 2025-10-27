//THIS IS THE GLOBAL STORE.


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todoSlice'

const store = configureStore({
    reducer:{
        todo: todoReducer,

        //these is the way we can add other reducers to our global store
        // product:productReducer,
        // cart:createReducer,

    }
})

export default store

