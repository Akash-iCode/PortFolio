import React,{ useState} from 'react'
import './qualification.css'
const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title"><i class='bx bx-list-ul bx-tada' ></i> Qualifications </h2>
        <span className="section__subtitle"><b className='boldEvent'>------------------------- My Personal Journey ------------------------</b></span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex" 
                    }
                     onClick={() => toggleTab(1)}>
                    <b><i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education</b>
                </div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }>
                    <b><i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience</b>
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content "}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title"><b>MIT ACADEMY OF ENGINEERING</b></h3>
                            <span className="qualification__subtitle">Bachelor Of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2019 - 2023
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div className="">
                            <h3 className="qualification__title"><b>B. U. JR. COLLEGE, AKOLA</b></h3>
                            <span className="qualification__subtitle">H.S.C. </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2017 - 2019
                            </div>
                        </div>

                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title"><b>MOUNT CARMEL HIGH SCHOOL, AKOLA</b></h3>
                            <span className="qualification__subtitle">S.S.C.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2017
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div className="">
                            <h3 className="qualification__title"><b>MOUNT CARMEL SCHOOL, AKOLA</b></h3>
                            <span className="qualification__subtitle"> Middle School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2013
                            </div>
                        </div>

                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content "}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title"><b>Tata Communications Ltd. </b></h3>
                            <span className="qualification__subtitle">Associate Engineer</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> July 2023 - []
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div className="">
                            <h3 className="qualification__title"><b>Altimax Consulting, Mumbai</b></h3>
                            <span className="qualification__subtitle"> Developer Intern </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> Jan 2023 - June 2023
                             </div>
                        </div>

                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title"><b>Altimax Technology, Mumbai</b></h3>
                            <span className="qualification__subtitle">Cloud Team Intern</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2022
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification