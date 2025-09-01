import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'

function App() {


  return (
    <>
      <NavBar />
      <Hero></Hero>
      <Program />
    </>
  )
}

export default App
