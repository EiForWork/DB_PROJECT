import React from 'react';
import '../home/ho.css'
import party from './img_home/roomshow1.png'
import deluxe from './img_home/roomshow2.png'
import luxury from './img_home/roomshow3.png'

function Home() {
  return (
    <div>
      <div className="Picslider">
        <p>BissHotella</p>
      </div>

      <div className="lorem">
        <h1>Welcome to BissHotella</h1>
        <p>
          We recommend staying at the "Rios Paradise Resort" for your upcoming trip. This exquisite resort offers luxurious accommodations, breathtaking sea views, and a host of amenities to make your stay truly unforgettable. Whether you're seeking relaxation on the beach or exciting water activities, Oceanfront Paradise Resort has it all, making it an ideal choice for your coastal retreat.
        </p>
        <button>BOOK NOW</button>
      </div>

      <div className="roomtypesBar">
        <div className="textroombox">
          <div className="roomtypebox">
            <p>ROOM TYPES</p>
          </div>
        </div>

        <div className="roomshow">
          <div className="firstroom">
            <h1>Party Room</h1>
            <div>
              <img src={party} alt="Party Room" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi 
            </p>
          </div>

          <div className="Secondroom">
            <h1>Deluxe Room</h1>
            <div>
              <img src={deluxe} alt="Deluxe Room" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa corrupti deserunt molestiae itaque ut. Quo molestias minima sed incidunt sequi fuga numquam! Sit nulla repudiandae eos delectus nobis quod nihil.
            </p>
          </div>

          <div className="Thirdroom">
            <h1>Luxury Room</h1>
            <div>
              <img src={luxury} alt="Luxury Room" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sit sint ipsam impedit, placeat, neque eos numquam delectus, iure beatae ab earum maiores quaerat aliquam? Culpa eos eligendi ut repellat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
