import { createSlice } from "@reduxjs/toolkit";


export const Captcha = createSlice({
    name: "captcha",
    initialState: {
        inputvalue: "",
        listvalue: [],
        letters: 'abcdefghijklmnopqrstuvwxyz0123456789'
    },
    reducers: {
        createCaptcha: function(words){
            if(words){
                
            }
        },
        submit: function (state, action) {
            state.inputvalue = action.payload


        },
        refresh: function (state, action) {
            state.list = action.payload
            state.inputvalue = ""

        }
    }


})
export const { submit, refresh, createCaptcha } = Captcha.actions;
const CaptchaReducer = Captcha.reducer;
export default CaptchaReducer


