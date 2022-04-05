import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="footer">
        <a href="https://www.linkedin.com/in/tomas-ocampo-753910212/">
            <button href="https://www.linkedin.com/in/tomas-ocampo-753910212/" className="footer__btn"><FontAwesomeIcon icon={ faLinkedin } /></button>
        </a>
        <a href="https://github.com/ocampott">
        <button className="footer__btn"><FontAwesomeIcon icon={ faGithubSquare } /></button>
        </a>
        <a href="https://twitter.com/ocampott">
        <button className="footer__btn"><FontAwesomeIcon icon={ faTwitterSquare } /></button>
        </a>
    </footer>
  )
}
