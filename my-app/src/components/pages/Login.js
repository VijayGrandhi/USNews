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
            if(response.data[0].message === "User does not exist!") {
                setLoginStatus(false);
                alert("User does not exist!")
            } else {
                console.log(response)
                localStorage.setItem("token", response.data[0].token)
                localStorage.setItem("username", response.data[0].username)
                localStorage.setItem("emailId", response.data[0].emailId)
                localStorage.setItem("likes", response.data[0].likes)
                localStorage.setItem("comments", response.data[0].comments)
                localStorage.setItem("saved", response.data[0].saved)
                localStorage.setItem("usertype", response.data[0].usertype)
                setLoginStatus(true);
                if( localStorage.getItem("usertype") === "reader" ){
                    navigate("/readerprofile")
                } else if( localStorage.getItem("usertype") === "journalist" ) {
                    navigate("/journalistprofile")
                }
                
                
            }
            
            
        })
    }

  return (
      <div>
          <h1> Login </h1>
          <label>Username</label>
          <input type="text" onChange={(e)=>{setusernameLogin(e.target.value)}}/>
          <label>Password</label>
          <input type="password" onChange={(e)=>{setpasswordLogin(e.target.value)}}/>
          <button onClick={login}>Login</button>
      </div>
  )
}
