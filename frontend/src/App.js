import React, { Component } from "react";
import './App.css';
import Login from "./components/Login/Login";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;