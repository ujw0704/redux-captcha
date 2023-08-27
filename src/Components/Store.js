import { configureStore } from "@reduxjs/toolkit";
import capslice from "./Slice"



  export const store= configureStore({
    reducer: {
        capreducer: capslice
    }


 })
