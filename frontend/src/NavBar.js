import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
        </ul>
    );
}

export default NavBar;