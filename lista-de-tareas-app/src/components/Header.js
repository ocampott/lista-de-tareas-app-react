import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

export const Header = ({showCompletedTask, setShowCompletedTask}) => {

  const toggleCompleted = () => {
    setShowCompletedTask(!showCompletedTask)
  }

  return (
    <header className="header">
        <h1 className="header__title">To do list</h1>
        {showCompletedTask
          ? 
        <button onClick={() => toggleCompleted()} className="header__btn">Don't show completed tasks <FontAwesomeIcon icon={faEyeSlash} className="header__btn-icon"/></button>
          :
        <button onClick={() => toggleCompleted()} className="header__btn">Show completed tasks <FontAwesomeIcon icon={faEye} className="header__btn-icon"/></button>
        }
        
    </header>
  )
}
