import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineClose} from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

import { links } from '../../data'
import Logo from '../../images/logo.png'
import './index.css'



export default function NavBar() {

    const [isNavShowing, setIsNavShowing] = useState(false);


    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>

                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path}
                                        className={({ isActive }) => isActive ? 'active-nav' : ''}
                                        onClick={() => setIsNavShowing(!isNavShowing)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
                    {isNavShowing ?  <MdOutlineClose /> :  <FaBars />} 
                </button>
            </div>
        </nav>
    )
}
