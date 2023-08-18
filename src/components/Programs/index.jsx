import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Card from '../../UI/Card'
import './index.css'
import { programs } from '../../data'
import SectionHeader from '../SectionHeader'

export default function Programs() {
    return (
        <section className='programs'>
            <div className="container programs__container">
                <SectionHeader icon={<FaCrown />} title="Programs" />

                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className="programs__program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>Learn More <AiFillCaretRight /> </Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

// {
//     id: 1,
//     icon: <SiOpenaigym/>,
//     title: "Program One",
//     info: "This is the day that the lord has made. We will rejoice!",
//     path: "/programs/111"
// },
