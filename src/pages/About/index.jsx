import React, { Fragment } from 'react'
import './index.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import Header from '../../components/Header'


export default function About() {
  return (
    <Fragment>
      <Header title="About Us" image={HeaderImage}>
        Here at Pure Fitness the best in design, functionality, and science all come together to provide clients with the best experience. From top-of-the-line industry leading strength and cardio equipment to best in class LEED design no attention to detail was overlooked when we designed our 30000 square foot facility.
      </Header>

      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Pure Fitness Canada delivers over 36,000 square feet of facilities, comprised of group class studios for Yoga, Pilates, Group Cycle, HITT, Bootcamp, and much more. Our cardio and strength areas provide over 140 pieces of state-of-the-art equipment. You will also find as health and wellness services, large spacious change rooms, showers, towel services, pools, saunas, and other amenities.
            </p>
            <p>
              Our believe in optimal health and wellness is strengthened with the newest addition of the club - The Functional Range Systems - Wellness Centre, providing world-class professional services such as Registered Massage Therapy, Chiropractic Care, Physiotherapy, and Osteopathic Care.
            </p>
            
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Pure Fitness Canada provides a personalized fitness atmosphere with the amenities of a big box gym. While we are committed to providing a beautifully designed space, we pay close attention to ensuring that we also provide a fun, social, and spacious environment. In our spaces you will find industry leading fitness equipment and spacious beautifully designed class studios. Our staff is comprised of the world's most renowned clinicians plus trainers certified in the highest level protocols in the industry making us Toronto’s premier destination for care and improved performance.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Pure Fitness Canada opened on January 2007 welcoming new members to its exciting fitness club in Uptown Toronto. We now have a second club which is located in Downtown Toronto. With proven experience in the health and fitness industry our owners, give us an edge that allows us to provide the best customer service possible.
            </p>
          </div>
          
        </div>
      </section>

    </Fragment>
  )
}
