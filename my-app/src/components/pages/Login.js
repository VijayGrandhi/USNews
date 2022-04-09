import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const Login = () => {
    const [username, setusernameLogin] = useState('')
    const [password, setpasswordLogin] = useState('')

    const login = () => {
        Axios.post("/login01", {
            usernameField: username,
            passwordField: password,
            withCredentials: true
        }).then((response)=>{
            console.log(response)
        })
    }

  return (
      <div>
          <h1> Login </h1>
          <label>Username</label>
          <input type="text" onChange={(e)=>{setusernameLogin(e.target.value)}}/>
          <label>Password</label>
          <input type="text" onChange={(e)=>{setpasswordLogin(e.target.value)}}/>
          <button onClick={login}>Login</button>
      </div>
  )
}
