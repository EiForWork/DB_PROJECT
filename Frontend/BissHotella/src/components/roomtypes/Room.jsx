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

      <div className="partyroompic">
        <div className="partytopic">Party Room</div>
      </div>

      <div className="partydetail">
        <div className="topicpar">Detail</div>
        <div className="detailallpar">
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 200,000 THB</li>
              <li>Capacity: 10</li>
              <li>5 BedRoom</li>
              <li>3 BathRoom</li>
            </ul>
          </div>

          <div className="paruse">
            <h1>Service Usage</h1>
            <ul>
              <li>Soap</li>
              <li>Towel</li>
              <li>Hair dryer</li>
            </ul>
          </div>

          <div className="parroomservice">
            <h1>Service</h1>
            <ul>
              <li>Luxury meal set</li>
              <li>Slider</li>
              <li>Light for Night Party</li>
            </ul>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
            <ul>
              <li>Fitness</li>
              <li>Meal</li>
              <li>Swimming</li>
              <li>Private Kitchen</li>
            </ul>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
            <ul>
              <li>Car Capacity: 5</li>
              <li>Bigbike Capacity: 7</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      <div className="partyroompic2">
        <div className="partytopic2">Deluxe Room</div>
      </div>

      <div className="partydetail">
        <div className="topicpar">Detail</div>
        <div className="detailallpar">
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 100,000 THB</li>
              <li>Capacity: 2</li>
              <li>1 BedRoom</li>
              <li>1 BathRoom</li>
            </ul>
          </div>

          <div className="paruse">
            <h1>Service Usage</h1>
          </div>

          <div className="parroomservice">
            <h1>Service</h1>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
          </div>
        </div>
      </div>

        {/* ------------------------------------------------------------------------------------------------------------ */}

      <div className="partyroompic3">
        <div className="partytopic">Luxury Room</div>
      </div>

      <div className="partydetail">
        <div className="topicpar">Detail</div>
        <div className="detailallpar">
          <div className="pardetail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 100,000 THB</li>
              <li>Capacity: 2</li>
              <li>1 BedRoom</li>
              <li>1 BathRoom</li>
            </ul>
          </div>

          <div className="par-use">
            <h1>Service Usage</h1>
          </div>

          <div className="parroomservice">
            <h1>Service</h1>
          </div>

          <div className="parfaci">
            <h1>Facilities</h1>
          </div>

          <div className="parpark">
            <h1>Parking</h1>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
}

export default Room;
