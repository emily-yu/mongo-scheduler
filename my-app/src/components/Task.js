import React from 'react';
class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <p>Task Name</p>
            <p>Remaining Time: 00ms</p>
          </div>
        )
      }
}
export default Task;