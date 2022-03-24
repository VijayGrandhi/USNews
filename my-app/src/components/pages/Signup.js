import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>This is the sign-up page.</h1>
        <form action="http://localhost:3000/signup" method="GET">
          <label>Username</label>
            <input type="text" name="username"></input><br></br>
            <label>Password</label>
            <input type="text" name="password"></input><br></br>
            <input type="submit" value="Sign In"></input>

        </form>
    </div>

  );
};

export default Signup;