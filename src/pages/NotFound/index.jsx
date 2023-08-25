import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function NotFound() {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'> Go Back Home
        </Link>
      </div>
    </section>
  )
}
