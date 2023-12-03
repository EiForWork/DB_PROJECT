import React, { useEffect, useState } from 'react'
import '../navbar/na.css'
import logo from '../navbar/logohotel.png'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


function Navbar() {

  const [auth,setAuth] = useState(false)

  useEffect(()=>{
    
  })

  return (
    <>
    <nav  className="mainBoxNav">
        <div className="logonav">
        <img className="logo" src={logo}/>
        </div>
       
        { auth ?
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
          }


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