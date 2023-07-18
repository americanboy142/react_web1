import React from "react";
import {Link} from 'react-router-dom';
import Logo from "./Logo.png";
import insta from "./insta.png";
import './components/navbar.css';

const Navbar = () => {

    return(
        <nav className="navbar">
            <div className="navbar-logo"><img src={Logo}></img></div>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul> 
        </nav>

    );
};

export default Navbar;