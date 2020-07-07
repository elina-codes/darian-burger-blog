import React from "react"

import "./footer.scss"
import linkedIn from "../../images/svg/contact-linkedin.svg"
import email from "../../images/svg/contact-email.svg"

const Footer = () => (
  <footer id="contact">
    <div className="wrapper">
      <h2 className="section__title">Contact Me</h2>
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/dariangrant/"
          rel="noopener noreferrer"
          target="_blank"
          className="footer__link"
        >
          <img src={linkedIn} alt="" className="footer__icon" />
        </a>

        <a href="mailto:dariangrant@gmail.com" className="footer__link">
          <img src={email} alt="" className="footer__icon" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
