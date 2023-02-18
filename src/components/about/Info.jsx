import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-hard-hat about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 Years Working</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-briefcase-alt-2 about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-book-content about__icon'></i>
            <h3 className="about__title">Qualification</h3>
            <span className="about__subtitle">Engineer (B.Tech)</span>
        </div>
    </div>
  )
}

export default Info;