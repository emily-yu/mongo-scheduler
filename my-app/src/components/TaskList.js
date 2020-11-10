import React from 'react';
import Task from './Task';
class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <h2>tasklist</h2>
            {
                this.props.tasks.map(item => { // for each of the tasks recieved from main App
                    // create a <Task> countdown element using properties
                    return <Task name={item.taskName} timeRemaining={item.timeRemaining}/>
                })
            }
          </div>
        )
      }
}
export default TaskList;
