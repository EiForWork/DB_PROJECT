import React from 'react';
import './home_1.css';
import Slider1 from './img_home/S__9322511.jpg';
import Slider2 from './img_home/ht_swim.jpg';
import Slider3 from './img_home/ht_room.jpg';
import Slider4 from './img_home/swim.png';
import Slider5 from './img_home/res.png';
import luxury from "./img_home/roomshow1.png" 
import High from "./img_home/roomshow2.png"
import Master from "./img_home/roomshow3.png"

function Home() {
  return (
    <div className='home_1.css'>
      <section className="container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slider-1" src={Slider1} alt="Slider 1" />
            <img id="slider-2" src={Slider2} alt="Slider 2" />
            <img id="slider-3" src={Slider3} alt="Slider 3" />
            <img id="slider-4" src={Slider4} alt="Slider 4" />
            <img id="slider-5" src={Slider5} alt="Slider 5" />
          </div>
          <div className="slider-nav">
            <a href="#slider-1"></a>
            <a href="#slider-2"></a>
            <a href="#slider-3"></a>
            <a href="#slider-4"></a>
            <a href="#slider-5"></a>
          </div>
        </div>
      </section>

      <div className="lorem">
        <h1>Welcome to OakHotel</h1>
        <p>We recommend staying at the "Rios Paradise Resort" for your upcoming trip...</p>
        <button>BOOK NOW</button>
      </div>

      {/* Room typesBar */}
      <div className="roomtypesBar">
        <div className="textroombox">
          <div className="roomtypebox">
            <p>ROOM TYPES</p>
          </div>
        </div>

        <div className="roomshow">
          <div className="firstroom">
            <h1>Luxury Room</h1>
            <div><img src={luxury} alt="Luxury Room" /></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="Secondroom">
            <h1>High Class</h1>
            <div><img src={High} alt="High Class" /></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>

          <div className="Thirdroom">
            <h1>Master Room</h1>
            <div><img src={Master} alt="Master Room" /></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
