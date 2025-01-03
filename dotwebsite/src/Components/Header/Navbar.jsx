// Navbar.jsx
import React from 'react';
import "../../../styles/Navbar.css"
import logo from "../../assets/logo.jpg"



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={logo} alt="Logo" className="logo" /></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">View Result</a></li>
            </ul>
            <div className="social-icons">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin-in"></a>
            </div>
        </nav>
    );
};

export default Navbar;