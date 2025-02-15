// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import userReducer from '../Slicer/userSlice'

// const store = configureStore({
//     reducer: {
//         userInfo: userReducer
//     }
// })

// export default store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slicer/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
