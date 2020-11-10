import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList'
import TaskCreator from './components/TaskCreator'
import React from 'react';

function App() {
  let tasks = [];
  
  const addTask = (taskName, timeRemaining) => {
    console.log(taskName, timeRemaining)
    // todo: update tasklist component + datastructure
  }
  return (
    <div className="App">
        <TaskCreator addTask={addTask}/>
        <TaskList/>
    </div>
  );
}

export default App;
