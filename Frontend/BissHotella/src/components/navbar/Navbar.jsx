import React, { useEffect, useState } from 'react'
import '../navbar/na.css'
import logo from '../navbar/logohotel.png'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


function Navbar() {

  // const [auth,setAuth] = useState(true)
  // const [id,setId] = useState('')
  // const [message,setMessage]  = useState('') 

  // useEffect(() => {
  //   // Assuming you are using fetch to make an HTTP request to check authentication status
  //   fetch('http://localhost:8080', {
  //     method: 'GET',
  //     headers: {
  //       // Add any headers needed for authentication check
  //       'Content-Type': 'application/json',
  //       // You may need to include authentication tokens or other headers here
  //     },
  //     credentials: 'include', // Include this if you are dealing with cookies or sessions
  //   })
  //     .then((loginInfo) => {
  //       if ( loginInfo.status === "Success") {
  //         // Authentication successful
  //         setAuth(true);
  //       } else {
  //         // Authentication failed
  //         setAuth(false);
  //         next();
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error checking authentication status:', error);
  //     });
  // }, []);


  return (
    <>
    <nav  className="mainBoxNav">
        <div className="logonav">
        <img className="logo" src={logo}/>
        </div>
       
        {/* { auth ? */}
    <div className="listnav">
        <ul className="ulnav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roomtypes">Room Types</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </div>
    : null // Render nothing if auth is false
          {/* } */}


        <div className="buttonnav">
               <button className="btnav"><Link to="/booking">Book now</Link></button>
        </div>
    </nav>   
    </>
  )
}

export default Navbar





// return (
//   <>
//     <nav className="mainBoxNav">
//       <div className="logonav">
//         <img className="logo" src={logo} alt="Logo" />
//       </div>

//       {bob === 5 ? (
//         <div className="listnav">
//           <ul className="ulnav">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/roomtypes">Room Types</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/gallery">Gallery</Link></li>
//           </ul>
//         </div>
//       ) : null}
//     </nav>
//   </>
// );
// }