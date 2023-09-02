import React from "react";
import "../auth.css";
const Login = ({ setShowModel }) => {
  return (
    <div className="auth-container">
      <span className="login-dismiss" onClick={() => setShowModel(false)}>
        &times;
      </span>
      <div className="login-top">
        <span>Login via UserName</span>
      </div>
      <hr />
      <div className="login-center">
        <form>
          <div className="login-username">
            <label>Email: </label>
            <input type="email" placeholder="Enter Your Email!!!" />
          </div>
          <div className="login-password">
            <label>Password: </label>
            <input type="password" placeholder="That's a Secrat" />
          </div>
          <button className="login-button">Login</button>
          <span>Forgot Password?</span>
        </form>
      </div>
      <hr />
      <div className="login-bottom">
        Don't have an account?
        <button onClick={() => setShowModel("signup")}>SignUp</button> Now
      </div>
    </div>
  );
};

export default Login;
