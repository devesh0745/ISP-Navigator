import {ispReducer} from "./reducers/ispReducer";
import { configureStore} from "@reduxjs/toolkit";


export const store=configureStore({
    reducer:{
        ispReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})