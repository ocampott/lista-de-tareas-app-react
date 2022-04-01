import React, { useState } from 'react'

export const EditTask = ({ task, setEditTask }) => {

  const [newTask, setNewTask] = useState(task.text)

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditTask(false)
  }
  
  return (
    <form action="" className="form-edit-task" onSubmit={handleSubmit}>
        <input type="text"  value={newTask} onChange={(e) => {setNewTask(e.target.value)}} className="form-edit-task__input"></input>
        <button type="submit" className="form-edit-task__btn">Edit</button>
    </form>
  )
}
