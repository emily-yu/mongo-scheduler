import React from 'react';
import Task from './Task';
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.tasks,
        };
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
