import React from "react";
import logo from '../../cutie.PNG';
import './styles.css';

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

//import Create from "../backend/components/createUser";  
//import { Route, Routes } from "react-router-dom";
//const userRoutes = require('../backend/server/routes/user.js');
/* 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
*/

export default class App extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    // let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div>
            Email<br></br>
            <input
              name="email"
              type="text"
              placeholder
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <div>
            Password<br></br>
            <input
              type="password"
              name="password"
              placeholder
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <button type="submit" id="Submit">
            Submit
          </button>
        </form>
        <div>
          <button type="createAccount" id="createAccount">
            Create Account
          </button>
        </div>
      </div>
    );
  }
}