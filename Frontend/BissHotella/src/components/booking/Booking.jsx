import React from 'react';
import '../booking/bo.css';
import { useState } from 'react'
import luxury from '../booking/img/luxury.png'
import pool from '../booking/img/pool.png'
import deluxe from '../booking/img/deluxe.png'
import Footer from '../footer/Footer'
import paypal from '../booking/img/paypal.png'
import master from '../booking/img/mas.png'
import truee from './img/true.png'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


function Booking() {

  const [PoAmo,setPo] = useState(1)
  const [PoPrice,setPoP] = useState(5000)

  const [DeAmo,setDe] = useState("")
  const [LuAmo,setLu] = useState("")

  const[AllPrice,setPrice] = useState(0)





  let roomtypes = ["Party Room","Deluxe Room","Luxury Room"]


  const addOrminus = (e) => {
    e.preventDefault();
    if (e.key === 'ArrowDown') {
      setPo((PoAmo) => Math.max(PoAmo - 1, 1));
    } else if (e.key === 'ArrowUp') {
      setPo((PoAmo) => PoAmo+1);
    }
    
  };

  

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

<div className="topiccart">
    <h2>YOUR CART</h2>
    <hr></hr>
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
              <img src={pool} alt="Poolvila" />
              <div className="room-details">
                <h1>Poolvila</h1>
                <small>Price: $5000</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value={PoAmo} min={1} max={10} onChange={(e)=>setPo(e.target.value)}  onKeyDown={addOrminus} /></td>
          <td>{"$"+setPoP(PoPrice*PoAmo)}</td>
        </tr>

        <hr/>


        <tr>
          <td>
            <div className="cart-info">
              <img src={deluxe} alt="Deluxe" />
              <div className="room-details">
                <h1>Deluxe</h1>
                <small>Price: $500</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" max="9"/></td>
          <td>$50</td>
        </tr>

        <hr/>

        <tr>
          <td>
            <div className="cart-info">
              <img src={luxury} alt="Luxury" />
              <div className="room-details">
                <h1>Luxury</h1>
                <small>Price: $50000</small><br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" /></td>
          <td>$50</td>
        </tr>

        <hr/>

      </table>



      {/* payment */}

      <form className="payment">
        <h1>Payment</h1>

        <div className="paymethod">
            <span>Pay Method</span>

          <div className="payselect">
            <div className="paybox">
              <img src={master}/>
            </div>
            
            <div className="paybox">
              <img src={paypal}/>
            </div>

            <div className="paybox">
              <img src={truee}/>
            </div>

            <div className="paybox">
              <p>See all</p>
            </div>
          </div>

        </div>
        
        <hr/>

        <div className="totalPrice">
            <div className="toPrice">
              <p>Total</p>
              <p>${AllPrice}</p>
            </div>
          </div>


      </form>

    </div>

    <Footer/>
  </>
  );
}

export default Booking;
