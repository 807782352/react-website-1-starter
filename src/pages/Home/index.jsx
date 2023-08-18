import React, { Fragment } from 'react'
import './index.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'

export default function Home() {
  return (
    <Fragment>
      <MainHeader />
      <Programs />
      <Values />
    </Fragment>
  )
}
