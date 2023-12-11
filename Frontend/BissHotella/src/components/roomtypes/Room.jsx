import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import '../roomtypes/ro.css'

function Room() {
  return (
    <>
<Navbar/>
    <div className="room">
      <div className="picpre">
        <div className="left">
          <div className="pictop"></div>

          <div className="bottom">
            <div className="botpic"></div>
            <div className="botpic2"></div>
          </div>
        </div>

        <div className="right">
          <div className="textall">
            <h1>Enjoy Your Rest | Enjoy Your Life</h1>
            <p style={{ marginTop: '50px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem id obcaecati aperiam quibusdam eligendi quos quasi ex
              sunt dolorem recusandae. Cum iusto blanditiis culpa doloremque
              officiis velit exercitationem nobis sint!
            </p>
          </div>
        </div>
      </div>

      {/* ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

      <div className="partyroompic">
        <div className="partytopic2">
           <p>Poovilla Room</p>
        </div>
      </div>

      <div className="partydetail">
  
      <div className="detailallpar">  
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 5,000 THB</li>
              <li>Capacity: 10</li>
              <li>5 BedRoom</li>
              <li>10 BathRoom</li>
            </ul>
          </div>


          <div className="parroomservice">
            <h1>Service</h1>
            <ul>
              <li>BBQ Tools</li>
              <li>Dryers</li>
              <li>Kitchen</li>
            </ul>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
            <ul>
              <li>Fitness</li>
              <li>Slider</li>
              <li>Private view</li>
              <li>Private Big Pool</li>
            </ul>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
            <ul>
              <li>Motocycle</li>
              <li>Supercar Care</li>
              <li>Capacity : 10</li>
            </ul>
          </div>

          
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      <div className="partyroompic2">
        <div className="partytopic2">
           <p>Deluxe Room</p>
        </div>
      </div>

      <div className="partydetail">
      <div className="detailallpar">  
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 500 THB</li>
              <li>Capacity: 2</li>
              <li>1 BedRoom</li>
              <li>1 BathRoom</li>
            </ul>
          </div>


          <div className="parroomservice">
            <h1>Service</h1>
            <ul>
              <li>Ramp</li>
              <li>Dryer</li>
              <li>Microwave</li>
            </ul>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
            <ul>
              <li>Fitness</li>
              <li>Private view</li>
              <li>TV</li>
              <li>PS5</li>
            </ul>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
            <ul>
              <li>Motorcycle</li>
              <li>Car</li>
              <li>Capacity : 2</li>
            </ul>
          </div>
        </div>
      </div>

        {/* ------------------------------------------------------------------------------------------------------------ */}

      <div className="partyroompic3">
      <div className="partytopic2">
           <p>Luxury Room</p>
        </div>
      </div>

      <div className="partydetail">

        <div className="detailallpar">  
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 50,000 THB</li>
              <li>Capacity: 2</li>
              <li>1 BedRoom</li>
              <li>1 BathRoom</li>
            </ul>
          </div>


          <div className="parroomservice">
            <h1>Service</h1>
            <ul>
              <li>Ramp</li>
              <li>Dryer</li>
              <li>Microwave</li>
              <li>Wine</li>
            </ul>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
            <ul>
              <li>Fitness</li>
              <li>VIP car parking</li>
              <li>Private view</li>
              <li>Private Pool</li>
            </ul>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
            <ul>
              <li>VIP car care</li>
              <li>Capacity : Your wish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
}

export default Room;
