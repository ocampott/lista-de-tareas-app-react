import './App.css';
import React, { useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {

  const [task, setTask] = useState([]);
  
  return (
    <div className="container">
      <Header />
      <Form task={ task } setTask={ setTask }/>
      <TaskList task={ task } setTask={ setTask }/>
    </div>
  );
}

export default App;
