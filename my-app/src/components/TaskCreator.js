import React from 'react';

const DURATION_HEADER = "duration (in seconds)";
class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.createTask= this.createTask.bind(this);
        this.updateParams= this.updateParams.bind(this);
        this.state = {
            taskName: "",
            timeRemaining: "",
        }
    }

    createTask() {
        // access task from parent
        if (this.state.taskName == "" && this.state.timeRemaining == "") {
            console.log("error")
        }
        else {
            this.props.addTask(this.state.taskName, this.state.timeRemaining)
        }
    }
    updateParams(event) {
        // this.setState = {
        //     taskName: event.target.value,
        //     timeRemaining
        // }
        if (event.target.placeholder == "title") {
            this.setState({
                taskName: event.target.value
            })
        }
        else {
            this.setState({
                timeRemaining: event.target.value
            })
        }
        console.log(event.target.placeholder)
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
          <div>
              <h2>new task</h2>
              <input type="text" placeholder="title" onChange={this.updateParams}></input>
              <input type="text" placeholder={DURATION_HEADER} onChange={this.updateParams}></input>
              <input type="button" value="done" onClick={this.createTask}></input>
          </div>
        )
      }
}
export default TaskCreator;