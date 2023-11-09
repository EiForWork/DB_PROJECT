import { useState } from 'react'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


// import Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
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
