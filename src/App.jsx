import { useRoutes } from 'react-router-dom'


import React from 'react'
import NavBar from './components/NavBar'
import router from './pages'
import Footer from './components/Footer';

export default function App() {

  const routes = useRoutes(router);

  return (
      <div>
        <NavBar />
        {routes}
        <Footer />
      </div>
  )
}
