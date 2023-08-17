import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'
import Plans from './pages/Plans'
import Trainers from './pages/Trainers'

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <NotFound />
      <Trainers />
    </div>
  )
}
