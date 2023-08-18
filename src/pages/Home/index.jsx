import React, { Fragment } from 'react'
import './index.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'

export default function Home() {
  return (
    <Fragment>
      <MainHeader />
      <Programs />
    </Fragment>
  )
}
