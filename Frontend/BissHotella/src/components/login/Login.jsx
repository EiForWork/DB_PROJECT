import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import '../login/login1.css'
import s1 from './img/appleicon.png'
import s2 from './img/fficon.png'
import s3 from './img/ggicon.png'

function Login() {
  return (
<>
<Navbar/>
    <div className="bgmain">
      <div className="mainbox">
        <form className="form" action="/login" method="POST">
          <h2>Login</h2>
          
          <input className="Email" type="email" placeholder="Email" name="email" /><br />
          <input className="Password" type="password" placeholder="Password" name="password" /><br />
          
          <div className="forgotpassword">
            <Link to="/register">Create Account</Link>
            <Link to="/">Forgot password?</Link>
          </div><br/>
          
          <button type="submit" className="buttonLog">Login</button><br />
          
          <div className="orlogin">
            <hr style={{ width: '200px', height: '1px', backgroundColor: 'rgb(194, 194, 194)' }} />
            <p>or login with</p>
            <hr style={{ width: '200px', height: '1px', backgroundColor: 'rgb(194, 194, 194)' }} />
          </div>
          
          <div className="contact">
            <img className="iconcon" src={s1} alt="" />
            <img className="iconcon" src={s2} alt="" />
            <img className="iconcon" src={s3} alt="" />
          </div>
        </form>
      </div>
    </div>
    <Footer/>
</>
  );
}

export default Login;
