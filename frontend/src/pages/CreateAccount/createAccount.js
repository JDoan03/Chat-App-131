import React from "react";
import { render } from "react-dom";

export default class createAccount extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Create your Account</h1>
        <form>
          {/* Email Input */}
          <div>
            <label>Email</label>
            <div>
              <input
                className="emailInput"
                name="email"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Confirm Email Input */}
          <div>
            <label>Confirm Email</label>
            <div>
              <input
                className="confirmEmailInput"
                name="email"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Password Input */}
          <div>
            <label>Password</label>
            <div>
              <input
                className="PasswordInput"
                name="Password"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Confirm Password Input */}
          <div>
            <label>Confirm Password</label>
            <div>
              <input
                className="confirmPasswordInput"
                name="confirmPassword"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <>
          {/* Button not working yet */}
            {/* <button type="createAccount" id="createAccount">
              Create Account
            </button> */}
          </>
        </form>
      </div>
    );
  }
}
