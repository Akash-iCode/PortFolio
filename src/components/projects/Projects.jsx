import React, { useState } from 'react'
import './services.css'

function Projects() {
  
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Here are some of my works  </span>
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
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

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
                    <h3 className="services__title"> Voice Assistant < br/> Devices</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 2 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Smart Speaker / Assistant</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Made attachment device which adds to any audio interface </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented AI module for response system </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Added Custom Wake Word for Assistant </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">COde dump on SBC device </p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title"> Social Media < br/> Website with React</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 3 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab()} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Interactive Social Media Website</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Objective 1</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Objective 2</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Objective 3 </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Onjective 4</p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <hr id='lineHalf' />
        <br />
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
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

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
                    <h3 className="services__title"> Voice Assistant < br/> Devices</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 2 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Smart Speaker / Assistant</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Made attachment device which adds to any audio interface </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented AI module for response system </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Added Custom Wake Word for Assistant </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">COde dump on SBC device </p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title"> Social Media < br/> Website with React</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 3 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab()} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Interactive Social Media Website</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Objective 1</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Objective 2</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Objective 3 </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Onjective 4</p>
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