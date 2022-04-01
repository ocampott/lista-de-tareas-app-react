import React from 'react'
import { Task } from './Task'

export const TaskList = ({task}) => {
  return (
    <ul className="task-list">
        {task.length > 0 
        ? 
        task.map((task) => {
            return <Task key={task.id} task={task} />
        })
        : 
        <div className="task-list__msg">No task added</div>}
    </ul>
  )
}
