import React, { useState,useEffect } from 'react';
import '../register/re.css'
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';


function Register() {
  
const [fname,setName] = useState('')
const [sname,setsName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [cpassword,setCpassword] = useState('')
const [phone,setPhone] = useState('')
const [country,setCoun] = useState('')
const [Birthday,setBirth] = useState('')
const [sex,setsex] = useState('')



const handleSubmit = (e) =>{
  e.preventDefault();
  const data={
    fname,
    sname,
    email,
    phone,
    sex,
    country,
    Birthday,
    password,
    cpassword,
  } 
  if(password != cpassword){
    return alert("Password incorrect")
  }
  console.log(data)
  fetch("http://localhost:8080/register",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      fname,
      sname,
      email,
      phone,
      sex,
      country,
      Birthday,
      password,
      cpassword,
    }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    if(data.status === 400){
      alert(data.message)
    }
    console.log(data,"userRegister")

  })
  .catch((error)=>{
    console.log("Fail userRegister")
  })
}

    



  return (
<>
<Navbar/>
    <div className="container">
      <div className="biggestbox">
        <div className="formbiggestbox">
          <form onSubmit={handleSubmit}>
            <div className="box1">
              <div className="name">
                <p>Name</p>
                <input onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div className="surname">
                <p>Surname</p>
                <input onChange={(e)=>{setsName(e.target.value)}} />
              </div>
            </div>

            <div className="phoneANDgender">
              <div className="phone">
                <p>Phone</p>
                <input onChange={(e)=>{setPhone(e.target.value)}} />
              </div>
              <div className="gender">
                <p>Sex</p>
                <div className="radioboxsex" id="gender">
                  <input type="radio" onChange={(e)=>{setsex(e.target.value)}} value="male" /> Male
                  <input type="radio" onChange={(e)=>{setsex(e.target.value)}} value="female" /> Female
                  <input type="radio" onChange={(e)=>{setsex(e.target.value)}} value="other" /> LGTQ+
                </div>
              </div>
            </div>

            <div className="box3un">
              <div className="emailform">
                <p>Email</p>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>

              <div className="country" id="country">
                <p>Select your country</p>
                <select id="country-select" onChange={(e)=>{setCoun(e.target.value)}} >
                  <option>---------Select your Country----------</option>
                  <option value="Thailand">Thailand</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Australia">Australia</option>
                  <option value="Switzerland">Switzerland</option>
                </select>
              </div>

              <div className="date">
                <p>Select Your Birthday</p>
                <input type="date" onChange={(e)=>{setBirth(e.target.value)}} />
              </div>
            </div>

            <div className="passwordform">
              <div className="password">
                <p>Password</p>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
              </div>

              <div className="confirmpassword">
                <p>Confirm Password</p>
                <input type="password" onChange={(e)=>{setCpassword(e.target.value)}} />
              </div>
            </div>

            <input
              className="regisbutton"
              type="submit"
              onClick={handleSubmit}
              value={"Submit"}
            />
          </form>
        </div>
      </div>
    </div>

    <Footer/>
</>
  );
}

export default Register;
