import React from 'react'
import './testimonials.css'
import Slider from './slider/Slider';



const Testimonials = () => {
  return (
    <section className="ColorWala">
    <section className="testimonial container section" id="testimonials">
        <h2 className="section__title"><i class='bx bx-comment-check bx-flashing' ></i> Testmonials </h2>
        <span className="section__subtitle"><b className='boldEvent'>--------- Here's What My Colleagues Say ---------</b></span>
        <Slider />
       
    </section>
    </section>
  )
}

export default Testimonials