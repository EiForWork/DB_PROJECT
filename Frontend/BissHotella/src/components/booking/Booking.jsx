import React from 'react';
import '../booking/bo.css';
import { useState } from 'react'

function Booking() {

  let roomtypes = ["Party Room","Deluxe Room","Luxury Room"]

  return (
  <>
    <div className="checkVisbox">
      <h1 className="booking-title">Booking And Check Here</h1>
      <form className="bookingCheck">
        <input type="date" id="CheckIn" placeholder="CheckIn" />
        <input type="date" id="CheckOut" placeholder="CheckOut" />

     

        <button>Check Availability</button>
      </form>
    </div>

    <div className="small-container cart-page">
      <table>
        <tr>
          <th>Room Type</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>

        <tr>
          <td>
            <div className="cart-info">
              <img src="../roomtypes/imgroom/poolvil.jpg" alt="Poolvila" />
              <div className="room-details">
                <h1>Poolvila</h1>
                <small>Price: $500</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" /></td>
          <td>$50</td>
        </tr>

        <tr>
          <td>
            <div className="cart-info">
              <img src="../roomtypes/imgroom/deluxe.jpg" alt="Deluxe" />
              <div className="room-details">
                <h1>Deluxe</h1>
                <small>Price: $500</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" /></td>
          <td>$50</td>
        </tr>

        <tr>
          <td>
            <div className="cart-info">
              <img src="../roomtypes/imgroom/luxury.jpg" alt="Luxury" />
              <div className="room-details">
                <h1>Luxury</h1>
                <small>Price: $500</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" /></td>
          <td>$50</td>
        </tr>
      </table>
    </div>
  </>
  );
}

export default Booking;
