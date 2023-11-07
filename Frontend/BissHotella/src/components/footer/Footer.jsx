import React from 'react'
import './fo.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="bigblock">
        <h1>BissHotella.com</h1>
        <nav className="navigate">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/blog'>BLOG</Link>
        </nav>  
    </div>
    </>
  )
}
export default Footer