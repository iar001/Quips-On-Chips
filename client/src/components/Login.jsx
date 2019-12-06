import React from 'react';
import { Link, withRouter } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="wrapper">


      <div className="auth-container">
        <h1>Login</h1>
        <hr />
        <form
          onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >
          <p>Username:</p>
          <input
            name="username"
            type="text"
            value={props.formData.username}
            placeholder="username"
            onChange={props.handleChange} />
          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={props.formData.password}
            placeholder="password"
            onChange={props.handleChange} />
          <hr />
          <button>Login</button>
          <Link to="/register"><button>Go to Register</button></Link>
        </form>
      </div>
      
    </div>
  );
}

export default withRouter(Login);