import "./App.css";
import React from "react";


import Homepage from "./Pages/Homepage";
import StudentLogin from "./Pages/StudentLogin";
import TeacherLogin from "./Pages/TeacherLogin";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>

      <Route path="/homepage" component={Homepage} />
      <Route path="/teacher" component={TeacherLogin} exact />
          <Route path="/chats" component={Chatpage} />
          <Route path="/student" component={StudentLogin} exact />
        </Router>
        </BrowserRouter>

    </div>
  );
}

export default App;
