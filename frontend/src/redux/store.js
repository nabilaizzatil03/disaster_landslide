import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        user: userReducer,
        disaster:disasterReducer,
    }
}) 

export default store
