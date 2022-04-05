import React from 'react'
import { Task } from './Task'

export const TaskList = ({task, setTask}) => {

  const toggleCompleted = (id) => { 
    setTask(task.map((task) => {
      if(task.id === id) {
        return {...task, completed: !task.completed}
      } else {
        return task
      }
    }))
  }

  const editTaskText = (id, newText) => { 
    setTask(task.map((task) => {
      if(task.id === id) {
        return {...task, text: newText}
      } else {
        return task
      }
    }))
  }

  return (
    <ul className="task-list">
        {task.length > 0 
        ? 
        task.map((task) => {
            return <Task key={ task.id } task={ task } toggleCompleted={ toggleCompleted } editTaskText={ editTaskText }/>
        })
        : 
        <div className="task-list__msg">No task added</div>}
    </ul>
  )
}
