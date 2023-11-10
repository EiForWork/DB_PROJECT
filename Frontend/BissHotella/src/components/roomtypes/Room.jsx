import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import '../roomtypes/ro.css'

function Room() {
  return (
    <>
<Navbar/>
    <div className="room">
      <div className="pic-pre">
        <div className="left">
          <div className="pic-top"></div>

          <div className="bottom">
            <div className="bot-pic"></div>
            <div className="bot-pic2"></div>
          </div>
        </div>

        <div className="right">
          <div className="text-all">
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

      <div className="party-room-pic">
        <div className="party-topic">Party Room</div>
      </div>

      <div className="party-detail">
        <div className="topic-par">Detail</div>
        <div className="detail-all-par">
          <div className="par-detail">
            <h1>Room Detail</h1>
            <ul>
              <li>Price / Night: 200,000 THB</li>
              <li>Capacity: 10</li>
              <li>5 BedRoom</li>
              <li>3 BathRoom</li>
            </ul>
          </div>

          <div className="par-use">
            <h1>Service Usage</h1>
            <ul>
              <li>Soap</li>
              <li>Towel</li>
              <li>Hair dryer</li>
            </ul>
          </div>

          <div className="par-room-service">
            <h1>Service</h1>
            <ul>
              <li>Luxury meal set</li>
              <li>Slider</li>
              <li>Light for Night Party</li>
            </ul>
          </div>

          <div className="par-faci">
            <h1>Facilities</h1>
            <ul>
              <li>Fitness</li>
              <li>Meal</li>
              <li>Swimming</li>
              <li>Private Kitchen</li>
            </ul>
          </div>

          <div className="par-park">
            <h1>Parking</h1>
            <ul>
              <li>Car Capacity: 5</li>
              <li>Bigbike Capacity: 7</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="party-room-pic2">
        <div className="party-topic2">Deluxe Room</div>
      </div>

      <div className="party-detail">
        <div className="topic-par">Detail</div>
        <div className="detail-all-par">
          <div className="par-detail">
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

          <div className="par-room-service">
            <h1>Service</h1>
          </div>

          <div className="par-faci">
            <h1>Facilities</h1>
          </div>

          <div className="par-park">
            <h1>Parking</h1>
          </div>
        </div>
      </div>

      <div className="party-room-pic3">
        <div className="party-topic">Luxury Room</div>
      </div>

      <div className="party-detail">
        <div className="topic-par">Detail</div>
        <div className="detail-all-par">
          <div className="par-detail">
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

          <div className="par-room-service">
            <h1>Service</h1>
          </div>

          <div className="par-faci">
            <h1>Facilities</h1>
          </div>

          <div className="par-park">
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
