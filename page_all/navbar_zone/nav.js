import React from 'react';
import './navbar1.css';
import logo from'./Logo/logohotel.png'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar.css'>
            <nav className="mainBoxNav">
                <div className="logonav">
                    <img className="logo" src={logo} alt="s" />
                </div>

                <div className="listnav">
                    <ul className="ulnav">
                        <li>Home</li>
                        <li>About</li>
                        <li>Room Types</li>
                        <li>Gallery</li>
                        <li>Login</li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>

                <div className="buttonnav">
                    <button className="btnav">Book now</button>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
