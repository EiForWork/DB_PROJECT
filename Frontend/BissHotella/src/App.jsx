import { useState } from 'react'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


// import Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
