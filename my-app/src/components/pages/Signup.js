import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const [usernameReg, setusernameReg] = useState('')
    const [passwordReg, setpasswordReg] = useState('')
    const [emailReg, setemailReg] = useState('')
    const [phoneNumberReg, setphoneNumberReg] = useState('')
    const [designationReg, setdesignationReg] = useState('')

    let navigate = useNavigate();

    const register = () => {
        Axios.post("/signin", {
            username: usernameReg,
            password: passwordReg,
            emailId: emailReg,
            contactNo: phoneNumberReg,
            usertype: designationReg

        }).then((response)=>{
            navigate("/home")
            
        })
    }

  return (
      <div>
          <h1> Sign Up </h1>
          <label>Username</label>
          <input type="text" onChange={(e)=>{setusernameReg(e.target.value)}}/>
          <label>Password</label>
          <input type="password" onChange={(e)=>{setpasswordReg(e.target.value)}}/>
          <label>Email</label>
          <input type="text" onChange={(e)=>{setemailReg(e.target.value)}}/>
          <label>Phone Number</label>
          <input type="text" onChange={(e)=>{setphoneNumberReg(e.target.value)}}/>
          <br/>
          <br/>
          
          <input type="radio" id="reader" name="designation" value = "reader" onChange={(e)=>{setdesignationReg(e.target.value)}}/>
          <label>Reader</label>
          
          <input type="radio" id="journalist" name="designation" value = "journalist" onChange={(e)=>{setdesignationReg(e.target.value)}}/>
          <label>Journalist</label>
          <br/>
          <button onClick={register}>Sign Up</button>
      </div>
  )
}
