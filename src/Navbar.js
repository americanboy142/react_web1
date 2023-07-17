import React from "react";
import {Link} from 'react-router-dom';
import Logo from "./Logo.png";

const Navbar = () => {
    const logo_style = {
        width : '10%',
        height : 'auto',
    }

    return(
        <nav className="navbar">
        <div className="navbar-container container">
            <div className="hamburger-lines">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/menu">Menu</Link></span>
                <span><a href="https:instagram/viacar">Instagram</a></span>
            </div>
            <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li>       </li>
                <li><a href="https:instagram/viacar">gram</a></li>
            </ul>
            <div className="logo"><img src={Logo} style={logo_style}></img></div>
            </div>
        </nav>
    );
};

export default Navbar;