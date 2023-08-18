import React from 'react'

import Image from '../../images/values.jpg'
import {GiCutDiamond} from 'react-icons/gi'
import SectionHeader from '../SectionHeader'
import {values} from '../../data'
import Card from '../../UI/Card'
import './index.css'

export default function Values() {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <img className="values__image" src={Image} alt="Values Image" />
            </div>
            <div className="values__right">
                <SectionHeader icon={<GiCutDiamond />} title="Our Values"></SectionHeader>
                <p>To enhance the quality of life in the communities, we serve through our fitness philosophy, facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness</p>                
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                                <Card className="values__value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

