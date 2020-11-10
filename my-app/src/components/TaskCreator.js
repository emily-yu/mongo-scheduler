import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);

        // function bindings
        this.createTask = this.createTask.bind(this);
        this.updateParams = this.updateParams.bind(this);

        // keeps track of the data to send upwards to create a new <Task> in main App
        this.state = {
            taskName: "",
            timeRemaining: "",
        }
    }

    // send data upwards to the parent App
    createTask() {
        // ensure that both fields are filled out
        if (this.state.taskName == "" && this.state.timeRemaining == "") {
            console.log("error")
        }
        else {
            // reference the function from App to call function reference
            this.props.addTask(this.state.taskName, this.state.timeRemaining)
        }
    }
    
    // update state variables for createTask() to send the data upwards to the App 
    updateParams(event) {
        // check which input field was updated, update state for that field
        if (event.target.placeholder == "title") {
            this.setState({
                // event.target is the caller field
                // event.target.value is the caller field's value; that is, the user's input in the box
                taskName: event.target.value
            })
        }
        else { // is duration input field
            this.setState({
                timeRemaining: event.target.value
            })
        }
    }

    render() {
        return (
          <div>
              <h2>new task</h2>
              <input type="text" placeholder="title" onChange={this.updateParams}></input>
              <input type="text" placeholder="duration (in seconds)" onChange={this.updateParams}></input>
              <input type="button" value="done" onClick={this.createTask}></input>
          </div>
        )
      }
}
export default TaskCreator;