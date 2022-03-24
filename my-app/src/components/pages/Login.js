import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>This is the log-in page.</h1>
        <form action="http://localhost:3000/login" method="POST">
          <label>Username</label>
            <input type="text" name="username"></input><br></br>
            <label>Password</label>
            <input type="text" name="password"></input><br></br>
            <input type="submit" value="Sign In"></input>
            </form>

    </div>

  );
};

export default Login;