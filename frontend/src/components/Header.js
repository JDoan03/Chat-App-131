import React from "react";
import { AuthContext } from "../App";
import Login from "./Login";
import Home from "./Home";

export const Header = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <nav id="navigation">
      <h1 href="#" className="logo">
        Chat App WOOO
      </h1>
      <button onClick={() => dispatch({type: "LOGOUT"})}>
        {state.isAuthenticated && (
          <h1>Hi {state.user.firstName} (LOGOUT)</h1>
        )}
      </button>
    </nav>
  );
};
export default Header;
