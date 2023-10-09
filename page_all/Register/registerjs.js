import React from 'react';

function register(){

<div className="container">
  <div className="biggestbox">
    {/* ---------------------------------------- */}
    <div className="registext">
      <p>Register</p>
    </div>
    {/* ---------------------------------------- */}
    <div className="formbiggestbox">
      <div className="box1">
        <div className="name" id="name">
          <p>Name</p>
          <input />
        </div>
        <div className="surname" id="surname">
          <p>Surname</p>
          <input />
        </div>
      </div>
      <div className="phoneANDgender">
        <div className="phone" id="phone">
          <p>Phone</p>
          <input />
        </div>
        <div className="gender" id="gender">
          <p>Sex</p>
          <div className="radioboxsex">
            <input type="radio" name="gender" id="male" />
            Male
            <input type="radio" name="gender" id="female" />
            Female
            <input type="radio" name="gender" id="other" />
            LGTQ+
          </div>
        </div>
      </div>
      <div className="box3un">
        <div className="emailform">
          <p>Email</p>
          <input type="text" id="email_input" />
        </div>
        <div className="country">
          <p>Select your country</p>
          <select>
            <option>---------Select your Country----------</option>
            <option id="Thailand">Thailand</option>
            <option id="India">India</option>
            <option id="USA">USA</option>
            <option id="Australia">Australia</option>
            <option id="Switzerland">Switzerland</option>
          </select>
        </div>
        <div className="date">
          <p>Select Your Birthday</p>
          <input id="datebirth" type="date" />
        </div>
      </div>
      <div className="passwordform">
        <div className="password">
          <p>Password</p>
          <input type="password" id="password" />
        </div>
        <div className="confirmpassword">
          <p>Confirm Password</p>
          <input type="password" id="confirmpassword" />
        </div>
      </div>
      <button id="regisbutton" className="regisbutton">
        Regis
      </button>
    </div>
    {/* ---------------------------------------- */}
  </div>
</div>


    
}

export default register