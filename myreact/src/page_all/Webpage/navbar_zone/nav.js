import React from 'react';
import './navbar1.css';

function Navbar() {
    return (
        <div className='navbar.css'>
            <nav className="mainBoxNav">
                <div className="logonav">
                    <img className="logo" src="./Logo/logohotel.png" alt="s" />
                </div>

                <div className="listnav">
                    <ul className="ulnav">
                        <li>Home</li>
                        <li>About</li>
                        <li>Room Types</li>
                        <li>Login</li>
                        <li>Gallery</li>
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
