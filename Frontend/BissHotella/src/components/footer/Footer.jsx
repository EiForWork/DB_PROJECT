import React from 'react'
import './fo.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import face from './foot_photos/face.png'
import yt from './foot_photos/yt.png'
import gm from './foot_photos/gmail.png'
import line from './foot_photos/line.png'


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
        <div className="logo">
          <img src={face}/>
          <img src={yt}/>
          <img src={gm}/>
          <img src={line}/>
        </div>
    </div>
    <div className="footerbot">
        <p>Copyright &copy;2023 BissHotella.com</p>
    </div>
    </>
  )
}
export default Footer