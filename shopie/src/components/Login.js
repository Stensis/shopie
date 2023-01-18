import React from "react";
import "../App.css";

function LoginForm() {
  return (
    <>
      <div class="container">
        <h2 class="t-center">Login</h2>
        <form action="">
          <div class="inputDiv">
            <label for="name" class="username">
              Username
            </label>
            <div class="userArea">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type your username"
              />
            </div>
            <hr />
          </div>
          <div class="inputDiv">
            <label for="password" class="username">
              Password
            </label>
            <div class="userArea">
              <i class="fa-solid fa-key"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
              />
            </div>
            <hr />
          </div>

          <button class="btn">Login</button>
          <span class="forgotPassword">Forgot password?</span>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
