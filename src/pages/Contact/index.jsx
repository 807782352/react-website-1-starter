import React from 'react'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './index.css'
import Header from '../../components/Header'

export default function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        In our experience, your struggles with finding contact details most likely come down to one of these reasons: you’re unaware of the different methods to extract emails; you haven’t invested in the right tools; or you only use one method, and if it doesn’t work—you give up.
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:kyrie807782352@gmail.com" target='_blank' rel='noreferrer noopener'> <MdEmail /></a>
            <a href="http://m.me/kyrie63" target='_blank' rel='noreferrer noopener'> <BsMessenger /></a>
            <a href="https://wa.me/+16478355170" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}
