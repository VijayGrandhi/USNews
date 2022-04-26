// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
// import { useNavigate } from "react-router-dom"

// export const Login = () => {
//     const [username, setusernameLogin] = useState('')
//     const [password, setpasswordLogin] = useState('')
//     const [loginStatus, setLoginStatus] = useState(false)
//     let navigate = useNavigate();
//     const login = () => {
//         Axios.post("/login", {
//             username: username, 
//             password: password
//         }).then((response)=>{
//             console.log(response)
//             if(response.data[0].message === "User does not exist!") {
//                 setLoginStatus(false);
//                 alert("User does not exist!")
//             } else {
//                 console.log(response)
//                 localStorage.setItem("token", response.data[0].token)
//                 localStorage.setItem("username", response.data[0].username)
//                 localStorage.setItem("emailId", response.data[0].emailId)
//                 localStorage.setItem("likes", response.data[0].likes)
//                 localStorage.setItem("comments", response.data[0].comments)
//                 localStorage.setItem("saved", response.data[0].saved)
//                 localStorage.setItem("usertype", response.data[0].usertype)
//                 setLoginStatus(true);
//                 navigate("/profile")
                
//             }
            
            
//         })
//     }

//   return (
//       <div>
//           <h1> Login </h1>
//           <label>Username</label>
//           <input type="text" onChange={(e)=>{setusernameLogin(e.target.value)}}/>
//           <label>Password</label>
//           <input type="password" onChange={(e)=>{setpasswordLogin(e.target.value)}}/>
//           <button onClick={login}>Login</button>
//       </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 import Axios from 'axios'
import { useNavigate } from "react-router-dom"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const Login = () => { 
    const [loginStatus, setLoginStatus] = useState(false)
    let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
            Axios.post("/login", {
            username: data.get('userName'), 
            password:  data.get('password')
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
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="UserName"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}