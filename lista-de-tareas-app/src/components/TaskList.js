import React from 'react'
import { Task } from './Task'

export const TaskList = ({task, setTask, showCompletedTask}) => {

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

  const deleteTask = (id) => {
    setTask(task.filter((task) => {
      if(task.id !== id) {
        return task
      } else {
        // eslint-disable-next-line array-callback-return
        return;
      }
      
    }))
  }

  return (
    <ul className="task-list">
        {task.length > 0 
        ? 
        task.map((task) => {
          if(showCompletedTask) {
            return <Task key={ task.id } task={ task } toggleCompleted={ toggleCompleted } editTaskText={ editTaskText } deleteTask={ deleteTask }/>
          } else if(!task.completed) {
            return <Task key={ task.id } task={ task } toggleCompleted={ toggleCompleted } editTaskText={ editTaskText } deleteTask={ deleteTask }/>
          }
          // eslint-disable-next-line array-callback-return
          return;
        })
        : 
        <div className="task-list__msg">No task added</div>}
    </ul>
  )
}
