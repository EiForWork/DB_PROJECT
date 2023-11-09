import React from 'react';
import '../register/re.css'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function Register() {
  return (
<>
<Navbar/>
    <div className="container">
      <div className="biggestbox">
        {/* ... (your existing HTML content) ... */}
        <div className="formbiggestbox">
          <form id="registrationForm" method="POST" action="/submit">
            <div className="box1">
              <div className="name">
                <p>Name</p>
                <input type="text" id="name" name="name" />
              </div>
              <div className="surname">
                <p>Surname</p>
                <input type="text" id="surname" name="surname" />
              </div>
            </div>

            <div className="phoneANDgender">
              <div className="phone">
                <p>Phone</p>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="gender">
                <p>Sex</p>
                <div className="radioboxsex" id="gender">
                  <input type="radio" name="gender" value="male" /> Male
                  <input type="radio" name="gender" value="female" /> Female
                  <input type="radio" name="gender" value="other" /> LGTQ+
                </div>
              </div>
            </div>

            <div className="box3un">
              <div className="emailform">
                <p>Email</p>
                <input type="email" id="email" name="email" />
              </div>

              <div className="country" id="country">
                <p>Select your country</p>
                <select id="country-select" name="country">
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
                <input type="date" id="datebirth" name="datebirth" />
              </div>
            </div>

            <div className="passwordform">
              <div className="password">
                <p>Password</p>
                <input type="password" id="password" name="password" />
              </div>

              <div className="confirmpassword">
                <p>Confirm Password</p>
                <input type="password" id="confirmpassword" name="confirmpassword" />
              </div>
            </div>

            <input
              className="regisbutton"
              type="submit"
              value="Register"
              onClick={(e) => {
                e.preventDefault();
                // Call your submiter() function here if needed.
              }}
            />
          </form>
        </div>
        {/* ... (the rest of your HTML content) ... */}
      </div>
    </div>

    <Footer/>
</>
  );
}

export default Register;
