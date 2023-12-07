import React, { useState,useEffect } from 'react';
import '../register/re.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { redirect, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



function Register() {
  
const [Name,setName] = useState('')
const [Surname,setsName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [cpassword,setCpassword] = useState('')
const [phone,setPhone] = useState('')
const [country,setCoun] = useState('')
const [birthday,setBirth] = useState('')
const [sex,setsex] = useState('')

const navigate = useNavigate()


const handleSubmit = (e) =>{
  e.preventDefault();
  const data={
    Name,
    Surname,
    phone,
    sex,
    country,
    birthday,
    email,
    password,
    cpassword
  } 

  for (const key in data) {
    if (data[key] === "" || data[key] === null) {
      return alert(`Please fill in all fields : ${key}`);
    }
  }

  //Comfirm Password
  if(password != cpassword){
    return alert("Password incorrect")
  }

    // Convert the birthday string to a Date object
    const birthDate = new Date(birthday);
    const currentYear = new Date().getFullYear();
    const cmpAge = currentYear - birthDate.getFullYear()
    
    // Check if the age is less than 18
    if (cmpAge < 18) {
      return alert("Under 18 cannot be registered");
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
      Name,
      Surname,
      phone,
      sex,
      country,
      birthday,
      email,
      password,
      cpassword
    }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    if(data.status === 201){
      alert(data.message)
      navigate("/login") //Navigiate When successfully
    }
    
    if(data.status === 400){
      alert("Email is already in use")
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
