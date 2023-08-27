import {createSlice} from "@reduxjs/toolkit"





export const capslice = createSlice({
  name: "capslice",
  initialState: {
    input: "",
    captcha: "",
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    createSliceer: function (state, action) {
      let words =
        "abcdefghijklmongqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      let output = "";
      words.split("").forEach((char) => {
        output += words[Math.floor(Math.random() * words.length)];
      });
      state.captcha = output;
    },
    add: function (state, action) {
      let wordcount =0;
     wordcount = state.captcha.split("").reduce((count, _, i) =>
        state.input[i] === state.captcha[i] && count < 7 ? count + 1 : count, 0
      )
       ( wordcount === 7 ? console.log("valid") : null)
        },
        
    ref: function (state, action) {
      console.log("hello");
    },
  },
});

export  const { ref, add, setInput, createSliceer } = capslice.actions;
const captchaReducer = capslice.reducer;
export default captchaReducer;
