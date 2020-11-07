import React from 'react';
import Task from './Task';
class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <Task name="asdf"/>
            <Task name="asdf2"/>
          </div>
        )
      }
}
export default TaskList;