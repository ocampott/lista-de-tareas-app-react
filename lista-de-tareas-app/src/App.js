import './App.css';
import React, { useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header';

function App() {

  const [task, setTask] = useState([
    {
      id: 1,
      text: "Task text",
      completed: false
    }
  ]);

  console.log(task);
  
  return (
    <div className="container">
      <Header />
      <Form task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
