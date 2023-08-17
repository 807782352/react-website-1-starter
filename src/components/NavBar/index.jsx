import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import {links} from '../../data'
import Logo from '../../images/logo.png'
import './index.css'



export default function NavBar() {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>

            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav__toggle-btn'>
                <FaBars />
            </button>
        </div>
    </nav>
  )
}
