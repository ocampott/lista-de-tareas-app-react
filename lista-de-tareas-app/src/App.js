import './App.css';
import React, { useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {

  const [task, setTask] = useState([]);

  const [showCompletedTask, setShowCompletedTask] = useState(false)
  
  return (
    <div className="container">
      <Header showCompletedTask={ showCompletedTask } setShowCompletedTask={ setShowCompletedTask }/>
      <Form task={ task } setTask={ setTask }/>
      <TaskList task={ task } setTask={ setTask } showCompletedTask={ showCompletedTask }/>
    </div>
  );
}

export default App;
