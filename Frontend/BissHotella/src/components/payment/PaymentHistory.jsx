import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import '../payment/po.css'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


// ... (imports)

function PaymentHistory() {
    const [userData, setUserData] = useState('');
    const [orders, setOrders] = useState([]); // Use an array for multiple orders
  
    useEffect(() => {
      // Make the API call when the component mounts
      axios.get('http://localhost:8080/history')
        .then((res) => {
          const fetchedOrders = res.data.results;
          console.log(fetchedOrders);
          if (fetchedOrders && fetchedOrders.length > 0) {
            setOrders(fetchedOrders); // Set the array of orders in the state
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, []); 
  
    return (
      <>
        <Navbar/>
        <div>
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Details</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_id}</td>
                  <td>{order.status}</td>
                  <td>{order.check_in}</td>
                  <td>{order.check_out}</td>
                  <td>{order.Details}</td>
                  <td>{order.TotalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default PaymentHistory;
  