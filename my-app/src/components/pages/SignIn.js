import React from 'react'

const Signin = () => {
  return (
    <div>
        <h1>This is the sign-in page.</h1>
        <form action="http://localhost:3000/signin" method="GET">
            <input type="text" name="username"></input>
            <input type="text" name="password"></input>
            <input type="submit" value="Sign In"></input>

        </form>
    </div>

  );
};

export default Signin;