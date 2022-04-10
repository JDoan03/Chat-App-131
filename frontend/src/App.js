import React from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/about">About</Link> | {" "}
          <Link to="/home">Home</Link> | {" "}
          <Link to="/login">Login</Link>
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default App;