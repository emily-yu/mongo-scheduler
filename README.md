# Countdown App with React

## Instructions

1. **Create a new React app:**
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
Clean up old assets to have a clean slate:

In src/App.js, delete lines 7-20.
Replace the content of App.js inside the return statement with:
```
<div>
  <header>
    <h1>Countdown App</h1>
  </header>
  <TaskList tasks={this.state.tasks} />
  <TaskCreator addTask={this.addTask} />
</div>
```

React is structured around making components and embedding them. App.js is the base of the application, and we’ll be putting instances of our components in there with the convention: <ComponentName />.

Make a folder under src/components to store all of these components.
To decide what items to make components, consider:

Reusability of components.
Functionality of related items.
For this app, we will need the following components:

List of countdown items
Countdown item
Place to input new countdowns
Task.js
We’ll start by creating the countdown items. For each countdown, we’ll call it a "Task."

Create a file src/components/Task.js and add the following code:

```
import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.taskName}</h3>
        <p>Remaining Time: {this.props.timeRemaining}s</p>
      </div>
    );
  }
}

export default Task;
```

To implement Task.js, import it into App.js:

```
import Task from './components/Task';
```
Create an instance in App.js:
```
<Task taskName="Sample Task" timeRemaining={10} />
```
If you reload, you should see a clean page with a task inside!

TaskList.js
We don’t want a ton of tasks floating around the application, so we’ll make the TaskList component to contain the tasks.

Create a file src/components/TaskList.js and add the following code:

```
import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Task List</h2>
        {this.props.tasks.map((item, index) => (
          <Task key={index} taskName={item.taskName} timeRemaining={item.timeRemaining} />
        ))}
      </div>
    );
  }
}

export default TaskList;
```
In App.js, add dummy data:

```
this.state = {
  tasks: [
    { taskName: "Task 1", timeRemaining: 10 },
    { taskName: "Task 2", timeRemaining: 20 }
  ]
};
```
Implement TaskList in App.js:
```
<TaskList tasks={this.state.tasks} />
```
TaskCreator.js
Right now, our data is hardcoded. We need a component to input data and update the parent state.

Create a file src/components/TaskCreator.js and add the following code:

```
import React from 'react';

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      timeRemaining: ''
    };
    this.updateParams = this.updateParams.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  updateParams(event) {
    const { placeholder, value } = event.target;
    if (placeholder === 'title') {
      this.setState({ taskName: value });
    } else if (placeholder === 'duration (in seconds)') {
      this.setState({ timeRemaining: value });
    }
  }

  createTask() {
    const { taskName, timeRemaining } = this.state;
    if (taskName && timeRemaining) {
      this.props.addTask(taskName, parseInt(timeRemaining, 10));
      this.setState({ taskName: '', timeRemaining: '' });
    } else {
      console.log("Error: Please fill in both fields.");
    }
  }

  render() {
    return (
      <div>
        <h2>New Task</h2>
        <input
          type="text"
          placeholder="title"
          value={this.state.taskName}
          onChange={this.updateParams}
        />
        <input
          type="text"
          placeholder="duration (in seconds)"
          value={this.state.timeRemaining}
          onChange={this.updateParams}
        />
        <input
          type="button"
          value="Add Task"
          onClick={this.createTask}
        />
      </div>
    );
  }
}

export default TaskCreator;
```
Bind createTask and updateParams methods in the constructor and add them to App.js:

```
addTask = (taskName, timeRemaining) => {
  this.setState(prevState => ({
    tasks: [...prevState.tasks, { taskName, timeRemaining }]
  }));
};
```
Implement TaskCreator in App.js:

```
<TaskCreator addTask={this.addTask} />
```
Countdown and Deletion Functionality
We need to execute a function every second to update the countdown.

Use setInterval to handle countdown updates in App.js:
```
componentDidMount() {
  this.interval = setInterval(() => {
    this.setState(prevState => ({
      tasks: prevState.tasks
        .map(task => ({
          ...task,
          timeRemaining: Math.max(task.timeRemaining - 1, 0)
        }))
        .filter(task => task.timeRemaining > 0)
    }));
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}
```
Congrats – you should now have a fully functional countdown app built in React.js! The source code is located at https://github.com/emily-yu/mongo-scheduler. Feel free to reference it if you get stuck or leave a comment on this tutorial.

Happy hacking!
