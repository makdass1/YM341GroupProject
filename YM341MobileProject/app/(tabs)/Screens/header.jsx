import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return(
        <div className="header">
            <div className="heading">
        <header className="head" id="header">
            <Link className="name" to="/home">YALANDANDOODLE.COM</Link>
            <nav id="nav-bar">
                <ul className="float">
                <li><a href=""> + Create a Doodle</a></li>
                <li><Link className="login-color" to="/Login">Login</Link></li>
                <li><Link className="signup-color" to="/signup">Sign up</Link></li>
            </ul>
            </nav>
        </header>
    </div>
        </div>
    )
}

export default Header