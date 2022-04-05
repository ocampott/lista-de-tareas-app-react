import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { EditTask } from './EditTask'

export const Task = ({task, toggleCompleted}) => {

    const [editTask, setEditTask] = useState(false)

    return (
    <li className="task-list__task">
        <FontAwesomeIcon onClick={() => toggleCompleted(task.id)} icon={task.completed ? faCheckSquare : faSquare} className="task-list__icon task-list__icon-check"/>
        <div className="task-list__text">
            {editTask ? 
                <EditTask task={ task } setEditTask={ setEditTask }/>
            :
                task.text}
        </div>
        <div className="task-list__btn-container">
        <FontAwesomeIcon icon={faEdit} onClick={() => {setEditTask(!editTask)}} className="task-list__icon task-list__icon-action"/>
        <FontAwesomeIcon icon={faTimes} className="task-list__icon task-list__icon-action"/>
        </div>
    </li>
  )
}
