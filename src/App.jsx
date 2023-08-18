import { useRoutes } from 'react-router-dom'


import React from 'react'
import NavBar from './components/NavBar'
import router from './pages'

export default function App() {

  const routes = useRoutes(router);

  return (
      <div>
        <NavBar />
        {routes}
      </div>
  )
}
