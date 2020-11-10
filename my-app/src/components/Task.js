import React from 'react';
class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <p>Task Name: {this.props.name}</p>
            <p>Remaining Time: {this.props.timeRemaining}</p>
          </div>
        )
      }
}
export default Task;