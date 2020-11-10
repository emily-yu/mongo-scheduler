import React from 'react';
import Task from './Task';
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        console.log("tasklist", this.state)
        this.state = {
            data: props.tasks,
            deleted: []
        };
    }
    componentWillReceiveProps(props){
        // Desired operations: ex setting state
        console.log("updated")
        console.log("Data: ", this.state.data)

        // check for deleted events
    }
    render() {
        return (
          <div>
            <h2>tasklist</h2>
            {
                this.state.data.map(item => {
                    return <Task name={item.taskName} timeRemaining={item.timeRemaining}/>
                })
            }
          </div>
        )
      }
}
export default TaskList;
