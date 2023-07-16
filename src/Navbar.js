import React from "react";
import {Link} from 'react-router-dom';
import Logo from "./Logo.png";

const Navbar = () => {
    return(
        <nav className="navbar">
        <div className="navbar-container container">
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li><Link to="/menu">Menu</Link></li>
                <li>Contact</li>
            </ul>
            <div className="logo">VC</div>
            </div>
        </nav>
    );
};

export default Navbar;