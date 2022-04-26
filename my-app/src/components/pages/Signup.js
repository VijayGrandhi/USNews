// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
// import { useNavigate } from "react-router-dom"

// export const Signup = () => {

//     const [usernameReg, setusernameReg] = useState('')
//     const [passwordReg, setpasswordReg] = useState('')
//     const [emailReg, setemailReg] = useState('')
//     const [phoneNumberReg, setphoneNumberReg] = useState('')
//     const [designationReg, setdesignationReg] = useState('')

//     let navigate = useNavigate();

//     const register = () => {
//         Axios.post("/signin", {
//             username: usernameReg,
//             password: passwordReg,
//             emailId: emailReg,
//             contactNo: phoneNumberReg,
//             usertype: designationReg

//         }).then((response)=>{
//             navigate("/home")
            
//         })
//     }

//   return (
//       <div>
//           <h1> Sign Up </h1>
//           <label>Username</label>
//           <input type="text" onChange={(e)=>{setusernameReg(e.target.value)}}/>
//           <label>Password</label>
//           <input type="password" onChange={(e)=>{setpasswordReg(e.target.value)}}/>
//           <label>Email</label>
//           <input type="text" onChange={(e)=>{setemailReg(e.target.value)}}/>
//           <label>Phone Number</label>
//           <input type="text" onChange={(e)=>{setphoneNumberReg(e.target.value)}}/>
//           <br/>
//           <br/>
          
//           <input type="radio" id="reader" name="designation" value = "reader" onChange={(e)=>{setdesignationReg(e.target.value)}}/>
//           <label>Reader</label>
          
//           <input type="radio" id="journalist" name="designation" value = "journalist" onChange={(e)=>{setdesignationReg(e.target.value)}}/>
//           <label>Journalist</label>
//           <br/>
//           <button onClick={register}>Sign Up</button>
//       </div>
//   )
// }



import * as React from 'react';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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

export const Signup = () => {
    let navigate = useNavigate();
    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
      const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
            Axios.post("/signin", {
            username: data.get('userName'),
            password: data.get('passowrd'),
            emailId: data.get('email'),
            contactNo: data.get('contactNo'),
            usertype:  value

        }).then((response)=>{
            navigate("/home")
            
        })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
         
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                
                

              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="contactNo"
                  label="Mobile No"
                  type="contactNo"
                  id="contactNo"
                  autoComplete="contactNo"
                />
                </Grid>
                <Grid item xs={12}>
                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}      >
        <FormControlLabel value="Reader" control={<Radio />} label="Reader" />
        <FormControlLabel value="journalist" control={<Radio />} label="Journalist" />
        
      </RadioGroup>
      </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}