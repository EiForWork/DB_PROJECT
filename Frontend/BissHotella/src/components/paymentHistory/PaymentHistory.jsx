import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import '../paymentHistory/pa.css'
import axios from "axios";


function PaymentHistory() {

    axios.get('http://localhost:8080/getuserdata')




    return (
    <>
        <Navbar/>
            
            <div className="box">

        <table className="tables">
        <h2>YOUR PAYMENT HISTORY</h2>
                <tr>
                    <th>OrderID</th>
                    <th>Status</th>
                    <th>CheckIn</th>
                    <th>CheckOut</th>
                    <th>Details</th>
                    <th>TotalPrice</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>

                
        </table>

            </div>




        <Footer/>
    </>
    )
}


export default PaymentHistory