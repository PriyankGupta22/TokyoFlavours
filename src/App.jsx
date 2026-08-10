import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'

function App() {

  return (
    <div>
      <Hero />
      <About />
      <Menu />
    </div>
  )
}

export default App
