import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className="header">
        <h1 className="header__title">To do list</h1>
        <button className="header__button">
            Don't show complete tasks
            <FontAwesomeIcon icon={faEyeSlash} className="header__button-icon"/>
        </button>
    </header>
  )
}
