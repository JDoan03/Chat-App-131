import React, { Component } from 'react';
import Login from '../components/Login';
import dashboard from '../pages/dashboard/dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path="/dashboard/:id" component={dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;