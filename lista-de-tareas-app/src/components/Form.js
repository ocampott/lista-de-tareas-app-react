import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'

export const Form = ({task, setTask}) => {

    const [inputTask, setInputTask] = useState('')

    const handleInput = (e) => {
        setInputTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTask([...task, {
            id: uuidv4(),
            text: inputTask,
            completed: false
        }]);
    }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            className="form__input"
            placeholder="Enter your to do task"
            value={inputTask}
            onChange={(e) => handleInput(e)}
        />

        <button type="submit" className="form__btn">
            <FontAwesomeIcon className="form__btn-icon" icon={faPlusSquare}/>
        </button>
    </form>
)
}
