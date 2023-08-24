import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { submit, refresh, createCaptcha } from "./Slice"

function Captcha() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => {
    return state.name
  })
  useEffect(() => {
    dispatch(createCaptcha())
  }, [])

  
  const dispatcher = () => {

    dispatch(submit())
  }
  const handleChange = (e) => {
    const inputValue = e.target.value;
  }
    return (
      <div>
        <input type='text' placeholder='type correct name' value ={matchdata}onChange={handleChange}></input>
        <button onClick={dispatcher}>Submit</button>
      </div>
    )
  
}
export default Captcha
