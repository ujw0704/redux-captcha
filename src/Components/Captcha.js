import React, { useEffect } from 'react'
import { UseSelector , useDispatch} from "@reduxjs/toolkit"
import {ref,add,setInput ,createSlice} from "./Slice"
import { useSelector } from 'react-redux'

function Captcha() {
    const initalinput = useSelector((state)=>{return state.capreducer})
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(createSlice)

    },[])
  return (
    <div>
      <h2>captcha filling</h2>
      <p>{initalinput.captcha}</p>

      <input type='text'placeholder='type correct'value={initalinput.input}onChange={(e)=>dispatch(setInput(e.target.value))}></input>

      <button onClick={()=>dispatch(add())}>chek</button>
      <button onDoubleClick={(dispatch(ref()))}></button>

    </div>
  )
}

export default Captcha

