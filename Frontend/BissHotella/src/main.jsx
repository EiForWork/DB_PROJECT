import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import App from './App.jsx'
import Login from './components/login/Login.jsx'
import Booking from './components/booking/Booking.jsx'
import Register from './components/register/Register.jsx'
import Room from './components/roomtypes/Room.jsx'
import Profile from './components/userprofile/Profile.jsx'
import PaymentHistory from './components/payment/PaymentHistory.jsx'
import Success from './components/success.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>, 
  },
  {
    path:"/roomtypes",
    element:<Room/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/gallery",
    element:<App/>
  },
  {
    path:"/booking",
    element:<Booking/>
  },
  {
    path:"/logout",
    element:<App/>
  },{
    path:"/profile",
    element:<Profile/>
  },{
    path:"/history",
    element:<PaymentHistory/>
  },
  {
    path:"/success",
    element:<Success/>
 },
 ,
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
