import React from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Page</h1>
        {/* Not sure why the page is inheriting login.js and login.css properties */}
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/about">About</Link> | {" "}
          <Link to="/home">Home</Link> |{" "}
          <Link to="/login">Login</Link> | {" "}
          <Link to="/createAccount">Create Account</Link> |{" "}
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default App;