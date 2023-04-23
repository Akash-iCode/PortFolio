import React, { useState } from 'react'
import './services.css'

function Services() {
  
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
        {/* Backend Developer UI UX Designer Cloud Developer */}
        <h2 className="section__title"><i class='bx bx-cog bx-spin' ></i> Services</h2>
        <span className="section__subtitle"><b className='boldEvent'>-------------------- Here what I offer --------------------</b></span>
        <div className="services__container container grid">
            <div className="services__content">
                <div className="">
                    <i class="bx bxs-server services__icon"></i>
                    <h3 className="services__title"> BackEnd< br/> Developer</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(1)}>View More Info <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title">Backend Development on Node.JS and Spring Framework </h3>
                        <p className="services__modal-description">With the stack of projects i have developed till date, i have intermidiate experience in developing architecture for appication backed and services based on Spring Framework as well as Node.js  </p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Experience in integrating with third-party APIs and services using Spring RestTemplate or Node.js HTTP client libraries..</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Worked on Spring Security for web applications</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Experience developing RESTful APIs </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Database and ORM experience</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficiency in using Spring Security or Passport.js for authentication and authorization.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Understanding of containerization and deployment using tools like Docker and Kubernetes in Spring and Node.js applications.</p>
                            </li>
                        
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="bx bxs-user-badge services__icon"></i>
                    <h3 className="services__title"> UI / UX < br/> Designer </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 2 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> UI / UX Designer</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in developing responsive web designs with React, Tailwind, and Bootstrap.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Skilled in creating visually appealing UI/UX interfaces and layouts. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Experience with implementing front-end design concepts, such as typography and color theory.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Familiarity with designing and developing user-centered interfaces and workflows. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ability to collaborate with cross-functional teams and communicate design ideas effectively.</p>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="bx bxl-google-cloud services__icon"></i>
                    <h3 className="services__title"> Cloud <br /> Developer AWS</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 3 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab()} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Cloud Development</h3>
                        <p className="services__modal-description">As a budding cloud developer i have adequate experience on use of cloud services for web applications and microservice development.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Demonstrated understanding of AWS cloud computing concepts and best practices</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in navigating AWS services and their respective features</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Experienced in deploying scalable and fault-tolerant systems on AWS</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Knowledgeable in cloud security and compliance measures</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Familiarity with cloud cost management and optimization techniques with AWS and Azure.</p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services