import React, { Fragment } from 'react'
import './index.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'

export default function Home() {
  return (
    <Fragment>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </Fragment>
  )
}
