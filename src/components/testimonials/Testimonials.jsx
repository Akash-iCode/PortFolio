import React from 'react'
import './testimonials.css'
import Slider from './slider/Slider';



const Testimonials = () => {
  return (
    <section className="ColorWala">
    <section className="testimonial container section">
        <h2 className="section__title">My Colleagues Say</h2>
        <span className="section__subtitle">----------------- Testmonials -----------------</span>
        <Slider />
       
    </section>
    </section>
  )
}

export default Testimonials