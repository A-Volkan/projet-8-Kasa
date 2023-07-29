import React from 'react';
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to="/">
                <div className='navbar__logo'>
                    <img src={logo} alt="Logo" />
                </div>
            </NavLink>
            <div className='navbar__ul'>
                <NavLink to="/">
                    <ul>Acceuil</ul>
                </NavLink>
                <NavLink to="/about">
                    <ul>A propos</ul>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;