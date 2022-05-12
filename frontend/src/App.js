import "./App.css";
import React from "react";

import TeacherLogin from "./Pages/TeacherLogin";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import StudentChatpage from "./Pages/StudentChatpage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={TeacherLogin} exact/>
            <Route path="/chats" component={Chatpage} />
            <Route path="/studentchats" component={StudentChatpage} />
          </Switch>
        </Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
