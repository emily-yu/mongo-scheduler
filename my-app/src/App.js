import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList'
import TaskCreator from './components/TaskCreator'
import React from 'react';

class App extends React.Component{    
  constructor(props){
       super(props);
       this.state = { tasks: [] };
       this.addTask = this.addTask.bind(this)
       this.interval = setInterval(() => {
          for (let [index, task] of this.state.tasks.entries()) {
            this.state.tasks[index].timeRemaining -= 1
            if (task.timeRemaining <= 0) {
              this.state.tasks.pop(index)
            }
            this.setState(this.state.tasks)
          }
       }, 1000)
  }    

  addTask = (taskName, timeRemaining) => {    
    // update tasklist datastructure
    this.state.tasks.push({taskName, timeRemaining})
    this.setState({tasks:this.state.tasks})
    console.log(this.state.tasks)

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
