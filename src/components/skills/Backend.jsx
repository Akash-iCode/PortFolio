import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Development</h3>
        <div className="skills__box">
            <div className="skills__group">   
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skill__level">Basics</span>
                    </div>
                </div>
                <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skill__level">Learning</span>
                        </div>
                </div>
                <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skill__level">Basics</span>
                        </div>
                </div>
            </div>
            <div className="skills__group">
            <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Heroku</h3>
                            <span className="skill__level">Basics</span>
                        </div>
                </div> 
            </div>
        </div>
    </div> 
  )
}

export default Backend