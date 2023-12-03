import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer.jsx';
import {createBrowserRouter,RouterProvider,Route,Link, json} from 'react-router-dom'
import '../login/login1.css'
import s1 from './img/appleicon.png'
import s2 from './img/fficon.png'
import s3 from './img/ggicon.png'
import { useState } from 'react';

function Login() {

  const [takeEmail,setEmail] = useState('')
  const [takePassword,setPas] = useState('')

  const submitForm = (e) =>{
    e.preventDefault();
    const loginInfo = {
      takeEmail,takePassword
    }
    console.log(loginInfo) //Show For Example
    fetch("http://localhost:8080/login",{
      method:"POST",
      crossDoamin:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({
        takeEmail,
        takePassword,
      })
    }).then((res)=>res.json())
    .then((loginInfo)=>{
      console.log(loginInfo,"userRegister")
    })
    .catch((error)=>{
      console.log("Error to sent check")
    })

  }//end Function


  return (
<>
<Navbar/>
    <div className="bgmain">
      <div className="mainbox">
        <form className="form" action="/login" method="POST">
          <h2>Login</h2>
          
          <input className="Email" type="email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}} /><br />
          <input className="Password" type="password" placeholder="Password"  onChange={(e)=>{setPas(e.target.value)}}  /><br />
          
          <div className="forgotpassword">
            <Link to="/register">Create Account</Link>
            <Link to="/">Forgot password?</Link>
          </div><br/>
          
          <input type="submit" className="buttonLog" value={"Login"}onClick={submitForm}/>
          
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
