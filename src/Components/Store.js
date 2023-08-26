import { configureStore } from "@reduxjs/toolkit";
import capslice from "/slice"



 export default configureStore({
    reducer: {
        capreducer: capslice
    }


 })