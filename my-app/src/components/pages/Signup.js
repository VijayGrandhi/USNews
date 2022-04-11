import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const Signup = () => {

    const [usernameReg, setusernameReg] = useState('')
    const [passwordReg, setpasswordReg] = useState('')

    const register = () => {
        Axios.post("/signUp", {
            username: usernameReg,
            password: passwordReg
        }).then((response)=>{
            console.log(response)
        })
    }

  return (
      <div>
          <h1> Sign Up </h1>
          <label>Username</label>
          <input type="text" onChange={(e)=>{setusernameReg(e.target.value)}}/>
          <label>Password</label>
          <input type="text" onChange={(e)=>{setpasswordReg(e.target.value)}}/>
          <button onClick={register}>Sign Up</button>
      </div>
  )
}
