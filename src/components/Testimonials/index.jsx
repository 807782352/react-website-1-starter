import React, { useState } from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import Card from '../../UI/Card'
import SectionHeader from '../SectionHeader'
import { testimonials } from '../../data'
import './index.css'

export default function Testimonials() {

    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        // if current index is 0, then it will change to -1
        setIndex(prev => prev - 1);
        // but current index is still 0
        // console.log(index);
        
        // if there is no equal to 0, the index will eventually be -1
        // however, there is no -1 index in the array
        // so the page would be crashed 
        if (index <= 0){
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1){
            setIndex(0);
        }
    }

    return (
        <section className='testimonials'>
            <div className="container testimonials__container">
                <SectionHeader icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head"/>
                <Card className="testimonial">
                        <div className="testimonial__avator">
                            <img src={avatar} alt={name} />
                        </div>
                        <p className='testimonial__quote'>{`"${quote}"`}</p>
                        <h5>{name}</h5>
                        <small className='testimonial__title'>{job}</small>
                </Card>
                <div className="testimonials__btn-container">
                    <button className='testimonials__btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                    <button className='testimonials__btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
                </div>
            </div>

        </section>
    )
}
