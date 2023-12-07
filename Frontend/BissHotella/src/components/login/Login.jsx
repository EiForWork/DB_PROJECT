import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/Footer.jsx';
import {createBrowserRouter,RouterProvider,Route,Link, json, useNavigate} from 'react-router-dom'
import '../login/login1.css'
import s1 from './img/appleicon.png'
import s2 from './img/fficon.png'
import s3 from './img/ggicon.png'
import { useState } from 'react';

function Login() {

  const navigate = useNavigate()

  const [takeEmail,setEmail] = useState('')
  const [takePassword,setPas] = useState('')

  const submitForm = (e) =>{
    e.preventDefault();
    const loginInfo = {
      takeEmail,
      takePassword
    }

    //Check before Login to system
    for(let key in loginInfo){
      if(loginInfo[key] === '' || loginInfo[key] === null){
        return alert(`Please fill your Infomation`)
      }
    }

    console.log(loginInfo) //Show For Example
    
    fetch("http://localhost:8080/login",{
      method:"POST",
      credentials:"include",
      crossDoamin:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
      },
      body:JSON.stringify({
        takeEmail,
        takePassword,
      })
    }).then((res)=>res.json())
    .then((loginInfo)=>{
      if(loginInfo.status === "Success"){
        alert("Welcome to the Hotel")
        navigate('/')
      }else{

      }
      console.log(loginInfo,"User Login")

  
    })
    .catch((err)=>{
      console.log("Error to sent check",err)
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
