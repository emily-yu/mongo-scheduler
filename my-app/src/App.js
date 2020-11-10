import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList'
import TaskCreator from './components/TaskCreator'
import React from 'react';
const Child = ({ number }) => <h1>{number}</h1>;
const Child2 = ({ taskName, timeRemaining }) => <Task name={taskName} timeRemaining={timeRemaining}/>;

class App extends React.Component{    
  constructor(props){
       super(props);
       this.state = { tasks: [], y: 0 };
       this.addTask = this.addTask.bind(this)
  }    

  addTask = (taskName, timeRemaining) => {
    console.log(taskName, timeRemaining)
    
    // update tasklist datastructure
    this.state.tasks.push({taskName, timeRemaining})
    this.setState({tasks:this.state.tasks})
    console.log(this.state.tasks)

    // update tasklist item
  }

  render() {
    return (
      <div className="App">
          <TaskCreator addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks}/>
          <Child number={2}/>
      </div>
    );
  }
}

export default App;
