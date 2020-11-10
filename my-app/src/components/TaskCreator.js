import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.createTask= this.createTask.bind(this);
    }

    createTask() {
        // access task from parent
        this.props.addTask("asdf", "200")
    }

    render() {
        return (
          <div>
              <h2>new task</h2>
              <input type="text" id="fname" placeholder="task name"></input>
              <input type="text" id="fname" placeholder="time to last (in seconds)"></input>
              <input type="button" value="done" onClick={this.createTask}></input>
          </div>
        )
      }
}
export default TaskCreator;