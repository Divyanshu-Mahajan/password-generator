import React, { useCallback, useEffect, useState } from 'react'
import './Features.css'
const Features = (props) => {
    const [inputLength,setInputlength] = useState(6)
    const [numberAllowed,setNumberallowed] = useState(false)
    const [characterAllowed,setCharacterallowed] = useState(false) 
    const rangeHandler = (event) =>{
        setInputlength(event.target.value)
    }
    const numberAllowedHandler = (event)=>{
        setNumberallowed(prev => !prev)
    }
    const characterAllowedHandler = (event) =>{
        setCharacterallowed(prev => !prev)
    }
    const passwordGenerator = useCallback(() =>{
        let generatedPassword = ""
        let helpingPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) helpingPassword += "0123456789"
        if(characterAllowed) helpingPassword += "~`!@#$%^&*(){}[]|\?/"
        for(let i = 1;i<= inputLength;i++){
            let random = Math.floor(Math.random() * helpingPassword.length + 1)
            generatedPassword += helpingPassword.charAt(random)
        }
        props.onPasswordChange(generatedPassword)
    },[inputLength,numberAllowed,characterAllowed,props.setPassword])
    useEffect(() =>{
        passwordGenerator()
    },[inputLength,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <div className='features'>
      <input className = "features__range" 
      type='range' 
      min = {6}
      max = {30} 
      value = {inputLength} 
      onChange={rangeHandler} 
      ></input>
      <label>Length : {inputLength}</label>
      <input className = "features__range-num" type='checkbox' onChange={numberAllowedHandler}></input>
      <label id='features__number'>Numbers</label>
      <input className = "features__range-char" type='checkbox' onChange={characterAllowedHandler}></input>
      <label id='features__character'>Character</label>
    </div>
  )
}

export default Features
