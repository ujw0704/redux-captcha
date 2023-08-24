import { configureStore } from "@reduxjs/toolkit";
import CaptchaReducer from "./Slice"


export  const Store = configureStore({
    reducer:{
        name: CaptchaReducer
    }

})
