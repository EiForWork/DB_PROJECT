import React, { useState } from 'react';
import '../userprofile/po.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import axios from 'axios';
import { useEffect } from 'react';


function Profile() {

    //Programming ZONE

const [name,setname] = useState('')
const [last,setlast] = useState('')
const [phone,setphone] = useState('')
const [email,setemail] = useState('Example')

useEffect(() => {




    // Make the API call when the component mounts
    axios.get('http://localhost:8080/getuserdata')
      .then((res) => {
        const { fname, lastname, phone, email } = res.data;
        setname(fname);
        setlast(lastname)
        setphone(phone)
        setemail(email)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 

 const updateData = (e) => {
    e.preventDefault();
    const data = {
        name,last,phone
    }
    // console.log(data)

    fetch("http://localhost:8080/updateprofile",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({name,last,phone}),
         credentials: 'include'
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.status === 200){
            alert("Data update is finish")
        }
      })
      .catch((error)=>{
        console.log("Fail Update data")
      })
 }

 //Return
  return (
    <>
<Navbar/>
<div className="ProfileFrame">
    <div className="Profilebox">
        
        <div className="backgroundPhoto">
            <div className="userpicture"></div>
        </div>

        <div className="Updateform">
        
            <div className="formbox1">

                <div className="formgroup">
                    <label>First name</label><br></br>
                    <input type="text"  value={name} onChange={(e) => setname(e.target.value)} /><br></br>
                </div>
                
                <div className="formgroup">
                    <label>Email</label><br></br>
                    <input type="text" value={email+" (Can't edit)"} read-Only/><br></br>
                </div>


            </div>

            <div className="formbox1">

                <div className="formgroup">
                    <label>Last Name</label><br></br>
                    <input type="text" value={last} onChange={(e) => setlast(e.target.value)} /><br></br>
                </div>
                
                <div className="formgroup">
                    <label>Phone</label><br></br>
                    <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} /><br></br>
                </div>

            </div>

        </div>

        <input className='updateform' type="submit" value={"Save"} onClick={updateData}/>

    </div>
</div>
<Footer/>
    </>
  );
}

export default Profile;
