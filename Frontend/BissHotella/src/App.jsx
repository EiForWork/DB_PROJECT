import { useState } from 'react'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


// import Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
