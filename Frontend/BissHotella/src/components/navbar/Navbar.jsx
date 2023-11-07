import React from 'react'
import '../navbar/na.css'
import logo from '../navbar/logohotel.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="mainBoxNav">
        <div className="logonav">
        <img className="logo" src={logo}/>
        </div>
       
        <div className="listnav">
               <ul className="ulnav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/roomtypes">Room Types</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
               </ul>
        </div>
       
        <div className="buttonnav">
               <button className="btnav">Book now</button>
        </div>
    </nav>   
    </>
  )
}

export default Navbar