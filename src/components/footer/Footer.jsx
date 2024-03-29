import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Akash</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/akash-bhingare-738245234/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">   <i class="bx bxl-linkedin-square"></i> </a>
                <a href="https://www.instagram.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">   <i class="bx bxl-instagram-alt"></i> </a>
                <a href="https://github.com/Akash-iCode" className="footer__social-icon" target="_blank" rel="noopener noreferrer">   <i class="bx bxl-github"></i>  </a>
            </div>
            <span className="footer__copy" >
                &#169; Akashbhingare. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer