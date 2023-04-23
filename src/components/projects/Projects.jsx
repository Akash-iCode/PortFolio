import React, { useState } from 'react'
import './services.css'

function Projects() {
  
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="projects">
        {/* Backend Developer UI UX Designer Cloud Developer */}
        <h2 className="section__title"><i class='bx bx-hard-hat bx-tada' ></i> Projects</h2>
        <span className="section__subtitle"><b className='boldEvent'>-------------------- Here are some of my works --------------------</b></span>
        <div className="services__container container grid">
            <div className="services__content">
                <div className="">
                    <i class="uil uil-window-grid services__icon"></i>
                    <h3 className="services__title"> Enhanced LMS < br/> Platform</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(1)}>View More Info <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title">Designed an LMS application</h3>
                        <p className="services__modal-description">As a part of my academic project, this was an attempt to enhancing modern day LMS platforms with additional features such as tracking asseswsment data, providing analytical feedback to individuals in the form of deefback reports.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Added tracking features to LMS Quiz activities.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Stored individual specific test data.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Designed Feedback Report Generator. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Sent mails through automated emails.</p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> AI Voice  < br/> Assistant </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 2 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Smart Speaker / Assistant</h3>
                        <p className="services__modal-description">This was my capstone project during my graduation. Within this project I created a voice assistant in python with the following features, implemented pre trained as well as self developed NLP modules a python application. Along with this, i also added features to common tasks automations</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Integrated OpenAI module in python project </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Leveraged OpenAi's PreTrained NLP module for common query responses </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Designed and integrated neural network module in the python project</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Trained the module to recognise and predict task specific responses based on user query</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented additional features to control desktop applications, handle browser requests, media querries as well as social media handling</p>
                            </li>
                            
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title"> IPL Dashoard <br /> with Spring</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 3 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab()} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> IPL Dashboard using Spring</h3>
                        <p className="services__modal-description">Leveraged skills in Spring Framework to develop a web application to display IPL Statistis and live data using  integrated API's</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Integrated API for Live analytics</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Display Statistics on Frontend</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Display match history data for specific teams </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Used rapid development featured like Spring Security and JPA</p>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects