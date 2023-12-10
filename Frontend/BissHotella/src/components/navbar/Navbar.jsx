import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../navbar/na.css'
import logo from '../navbar/logohotel.png'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


function Navbar() {
  const [auth, setAuth] = useState(false);
  const [getemail, setGetEmail] = useState('');

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then((res) => {
        if (res.data.status === "bobby") {
          setAuth(true);
          setGetEmail(res.data.Useremail);
        } else {
          setAuth(false);
        }
      })
      .catch((error) => {
        console.error('Error checking authentication status:', error);
      });
  }, []);

  const handlelogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(res => {
        if (res.data.status === 200) {
          setAuth(false);
          setGetEmail('');
          // Redirect to the login page or perform other actions
          window.location.href = '/login';
        } else {
          alert("Logout failed");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Logout failed");
      });
  };
  


  return (
    <>
    <nav  className="mainBoxNav">
        <div className="logonav">
        <img className="logo" src={logo}/>
        </div>
       
        { auth ?   //Already login 
        <>
      <div className="listnav">
        <ul className="ulnav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roomtypes">Room Types</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/profile">YourProfile</Link></li>
            <li><Link to="/logout" onClick={handlelogout}>Logout</Link></li>
        </ul>
      </div> 
      <div className="buttonnav">
               <button className="btnav"><Link to="/booking">Book now</Link></button>
      </div>
      </>
    :  
    //UnAutorized
    <>
    <div className="listnav">
      <ul className="ulnav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/roomtypes">Room Types</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
    <div className="buttonnav">
          <button className="btnav"><Link to="/login">Login</Link></button>
    </div>
    </>
          } 


       
    </nav>   
    </>
  )
}

export default Navbar



