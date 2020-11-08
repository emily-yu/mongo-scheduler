import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList'
import TaskCreator from './components/TaskCreator'
import React from 'react';

function App() {
  return (
    <div className="App">
        <TaskCreator/>
        <TaskList/>
    </div>
  );
}

export default App;
