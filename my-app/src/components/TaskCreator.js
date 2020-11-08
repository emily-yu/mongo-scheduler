import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
              <h2>new task</h2>
              <input type="text" id="fname" placeholder="task name"></input>
              <input type="text" id="fname" placeholder="time to last (in seconds)"></input>
              <input type="button" value="done"></input>
          </div>
        )
      }
}
export default TaskCreator;