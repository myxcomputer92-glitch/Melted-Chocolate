import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Quality from './Components/Quality'
import Pitcure from './Components/Pitcure'
import Footer from './Components/Footer'
import Showcase from './Components/Showcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Quality/>
      <Pitcure/>
      <Footer/>

    </>
  )
}

export default App
