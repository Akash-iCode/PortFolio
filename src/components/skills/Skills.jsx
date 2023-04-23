import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css';
function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title"><i class='bx bx-wrench bx-tada' ></i> My Skills</h2>
        <span className="section__subtitle"><b className='boldWhiten'>---------- Here are some of my skills -----------</b></span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
        <span className="section__subtitle"><br /> 
                    <span className="skill__level">I tend to explore different development frameworks & get hands-on experience.
                    <br />
                    As an electronics engineer however I wasn't initially exposed to these technologies, 
                    but got a chance to explore <br /> due to Evaluated Projects during my learning at MIT ACADEMY OF ENGINEERING</span></span>
        
    </section>
  )
}

export default Skills;