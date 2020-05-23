import React from 'react';

function Login() {
  return (

    <div>
      <div className="container">
        <div>
          <h1>Login Form</h1>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="startbar" action="/action_page.php">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" name="email" />
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" placeholder="Enter password" name="pswd" />
          <button type="submit"><a href="/#/editVillager">Submit</a></button>
      Or Signup <a href="/#/signup">here
      </a>
        </div>
      </div>
      <br />
      <br />

      <div>
        <img src="images/_4REuQH4_400x400.jpg" alt="animalcrossing" className="center" />
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;