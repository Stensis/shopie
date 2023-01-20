import React from "react";
import "../App.css";

function LoginForm() {
  return (
    <>
      <div className="container">
        <h2 className="t-center">Login</h2>
        <form action="">
          <div className="inputDiv">
            <label for="name" className="username">
              Username
            </label>
            <div className="userArea">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type your username"
              />
            </div>
            <hr />
          </div>
          <div className="inputDiv">
            <label for="password" className="username">
              Password
            </label>
            <div className="userArea">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
              />
            </div>
            <hr />
          </div>

          <button className="btn">Login</button>
          <span className="forgotPassword">Forgot password?</span>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
