import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList'
import TaskCreator from './components/TaskCreator'
import React, { Component } from 'react';

class App extends Component {    
  constructor(props){
       super(props);

        // app state - for updating tasklist as tasks are added
        this.state = {
          tasks: []
        };

        // bindings for functions so references don't change on each render
        this.addTask = this.addTask.bind(this)

       // timer countdown to decrement tasks each second
       this.interval = setInterval(() => {
          for (let [index, task] of this.state.tasks.entries()) {
            // perform the oepration
            this.state.tasks[index].timeRemaining -= 1

            // if time is completed...
            if (task.timeRemaining <= 0) {
              // remove the task
              this.state.tasks.pop(index)
            }

            this.setState(this.state.tasks) // update state = update tasklist
          }
       }, 1000)
  }    

  addTask = (taskName, timeRemaining) => {    
    // update tasklist datastructure
    this.state.tasks.push({taskName, timeRemaining})
    this.setState({tasks:this.state.tasks})

    // update tasklist item (happens thorough setState)
  }

  render() {
    return (
      <div className="App">
          <TaskCreator addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
  
}

export default App;
