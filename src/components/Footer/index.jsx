import React from 'react'
import {Link} from 'react-router-dom'
import {FaInstagram, FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

import Logo from '../../images/logo.png'
import './index.css'

export default function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                A person with a good physical health can live life to its fullest extent. A great wording “Health is Wealth” truly fits for those who are physical and mentally fit. 
                </p>
                <div className="footer__socials">
                    <a href="http://linkedin.com/" target='_blank' rel='noreferrer noopener'>
                        <FaLinkedin />
                    </a>
                    <a href="http://facebook.com/" target='_blank' rel='noreferrer noopener'>
                        <FaFacebook />
                    </a>
                    <a href="http://twitter.com/" target='_blank' rel='noreferrer noopener'>
                        <AiOutlineTwitter />
                    </a>
                    <a href="http://instagram.com/" target='_blank' rel='noreferrer noopener'>
                        <AiFillInstagram />
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2023 Ziyi Xu React Website Exercise &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}
