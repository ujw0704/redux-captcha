import {createSlice} from "@reduxjs/toolkit"



export  const capslice = createSlice({
    name: "catchaslice",
    initialState:{

        input :"",
        captcha :"",
        
        
        reducers:{
            setInput: function(state,action){
                state.input= action.payload;
        },
        createSlice: function(state, action){
            let words ="abcdefghijklmongqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
            let output =""
           words.forEach(value,index => {
            output+= words[Math.floor(Math.round()*source.length)]
            
           });
           state.captcha.output

        },
        add: function(state, action) {
            let wordcount = state.captcha.words.reduce((count, _, i) => 
                (state.input[i] === state.captha && count < 7) ? count + 1 : count, 0);
        
            (wordcount === 7) ? console.log("valid") : null;
        
        
        

                }
          
            

        
            
        },
    },
});