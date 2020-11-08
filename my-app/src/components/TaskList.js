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
            <Task name="asdf" timeRemaining="200"/>
            <Task name="asdf2" timeRemaining="2000"/>
          </div>
        )
      }
}
export default TaskList;