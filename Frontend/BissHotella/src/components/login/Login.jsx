import React from 'react';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function Login() {
  return (
<>
<Navbar/>
    <div className="bgmain">
      <div className="mainbox">
        <form className="form" action="/login" method="POST">
          <h1>Login</h1>
          
          <input className="Email" type="email" placeholder="Email" name="email" /><br />
          <input className="Password" type="password" placeholder="Password" name="password" /><br />
          
          <div className="forgotpassword">
            <a href="#">Create Account</a>
            <a href="#">Forgot password?</a>
          </div><br />
          
          <button type="submit" className="buttonLog">Login</button><br />
          
          <div className="orlogin">
            <hr style={{ width: '200px', height: '1px', backgroundColor: 'rgb(194, 194, 194)' }} />
            <p>or login with</p>
            <hr style={{ width: '200px', height: '1px', backgroundColor: 'rgb(194, 194, 194)' }} />
          </div>
          
          <div className="contact">
            <img className="iconcon" src="./img/ggicon.png" alt="" />
            <img className="iconcon" src="./img/fficon.png" alt="" />
            <img className="iconcon" src="./img/appleicon.png" alt="" />
          </div>
        </form>
      </div>
    </div>
    <Footer/>
</>
  );
}

export default Login;
