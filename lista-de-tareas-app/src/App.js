import './App.css';
import React, { useState, useEffect } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {

  //Obtengo las tareas guardadas en localStorage
  const savedTasks = localStorage.getItem("savedTasks") ? JSON.parse(localStorage.getItem("savedTasks")) : [];

  //Estado de las tareas
  const [task, setTask] = useState(savedTasks);

  //Estado de las tareas dentro de localStorage
  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(task))
  }, [task])

  //Acceso a localStorage y compruebo si tareas completadas es null 
  let savedCompleted = ""
  if(localStorage.getItem("savedCompleted") === null ) {
    savedCompleted = true;
  } else {
    savedCompleted = localStorage.getItem("savedCompleted") === "true"
  }

  //Estado de las tareas completadas
  const [showCompletedTask, setShowCompletedTask] = useState(savedCompleted)

  //Estado de las tareas completadas en localStorage
  useEffect(() => {
    localStorage.setItem("savedCompleted", showCompletedTask.toString())
  }, [showCompletedTask])
  
  return (
    <div className="container">
      <Header showCompletedTask={ showCompletedTask } setShowCompletedTask={ setShowCompletedTask }/>
      <Form task={ task } setTask={ setTask }/>
      <TaskList task={ task } setTask={ setTask } showCompletedTask={ showCompletedTask }/>
      <Footer />
    </div>
  );
}

export default App;
