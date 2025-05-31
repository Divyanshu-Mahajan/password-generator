import React, { useCallback, useRef, useState } from 'react'
import Features from './Features'
import "./Input.css"

const Input = () => {
  const [password,setPassword] = useState("")
  const passwordChangeHandler = (password) =>{
    setPassword(password)
  } 
  const passWordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passWordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className='input-container'>
      <div className='input-form'>
        <h2 className='input-form__heading'>
        Password Generator
        </h2>
      <div>
      <input className='input-form__field' value={password} ref={passWordRef} readOnly />
      <button className='input-form__btn' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <Features onPasswordChange = {setPassword}/>
      </div>
    </div>
    
  )
}

export default Input
