import React, { Component } from "react";
import './App.css';
import Login from "./pages/Login/Login";

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