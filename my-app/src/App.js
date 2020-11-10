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
       this.deleteTask = this.deleteTask.bind(this)
       this.interval = setInterval(() => {
          console.log("asdf")
          for (let [index, task] of this.state.tasks.entries()) {
            console.log(task)
            task.timeRemaining -= 100
            if (task.timeRemaining == 0) {
              this.state.tasks.pop(index)
            }
          }
          this.setState({time: Date.now()})    
       }, 2000)
  }    

  addTask = (taskName, timeRemaining) => {
    console.log(taskName, timeRemaining)
    
    // update tasklist datastructure
    this.state.tasks.push({taskName, timeRemaining})
    this.setState({tasks:this.state.tasks})
    console.log(this.state.tasks)

    // update tasklist item (happens thorough setState)
  }
  deleteTask = index => {
    console.log(index)
  }

  render() {
    return (
      <div className="App">
          <TaskCreator addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
