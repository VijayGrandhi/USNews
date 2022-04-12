import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [username, setusernameLogin] = useState('')
    const [password, setpasswordLogin] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    let navigate = useNavigate();
    const login = () => {
        Axios.post("/login", {
            username: username, 
            password: password
        }).then((response)=>{
            console.log(response)
            if(response.data[0].message == "User does not exist!") {
                setLoginStatus(false);
                alert("User does not exist!")
            } else {
                localStorage.setItem("token", response.data[0].token)
                setLoginStatus(true);
                navigate("/home")
            }
            
            
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
