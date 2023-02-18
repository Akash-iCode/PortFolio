import React, { useState } from 'react'
import './services.css'

function Services() {
  
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">My Technical Proficiency </span>
        <div className="services__container container grid">
            <div className="services__content">
                <div className="">
                    <i class="uil uil-window-grid services__icon"></i>
                    <h3 className="services__title"> Product < br/> Designer</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title">Product Designing</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Interactions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I create UX element interactions </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Provide cloud based solutions for your workload</p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> UI / UX< br/> Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> UI / Ux Designing</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Interactions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I create UX element interactions </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Provide cloud based solutions for your workload</p>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title"> Visual < br/> Designer</h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services__button-icon">
                </i></span>
                <div className={toggleState === 1 ?" services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="servces__modal-title"> Visual Designer</h3>
                        <p className="services__modal-description">I'm yet a learning individual
                         with little experience as an inter.However I do aim to ensure that I deliver 
                         quality work towards my company and teammates.</p>

                         <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Interactions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I create UX element interactions </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Provide cloud based solutions for your workload</p>
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