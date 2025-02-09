import React from 'react'

import {FaQuestion} from 'react-icons/fa'
import SectionHeader from '../SectionHeader'
import {faqs} from '../../data'
import FAQ from '../FAQ'
import './index.css'

export default function FAQs() {
  return (
    <section className='faqs'>
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion />} title="FAQs" />
        <div className='faqs__wrapper'>
          {
            faqs.map(({id, question, answer}) => {
              return (
                <FAQ key={id} question={question} answer={answer}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
