instructions

1
https://reactjs.org/docs/create-a-new-react-app.html
npx create-react-app my-app
cd my-app
npm start


2
clear out old assets to have a clean slate

in app.js
delete lines 7-20
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Example6/>
      </header>

shoudl just have a: 
    <div className="App">
    </div>
...inside of the return statement
there is a lot of irrelevant code that pertains to the css/logic of the intro screen, but we can ignore that right now to quickly get started.

3
reacts structured around making components and embedding. App.js is the base of the application, we'll be putting instances of our components in there with the convention: <ComponentName\>
1 - make a folder under src/components, where we will store all of these components

to decide what items to make components, we will look at two things: 1) reusability of components, 2) functionality of related items.
in this app, we will need the following components on the user interface: 
  i) list of countdown items (see ii)
  ii) countdown item
  ii) place to input new countdowns

TASK.JS
we'll start by make the countdown items contained by i). for each countdown, let's call it a "Task."
1 - make a file, components/Task.js
2 - copy paste the following code
import React from 'react';
class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <p>Task Name</p>
            <p>Remaining Time: 00s</p>
          </div>
        )
      }
}
export default Task;

the first line is importing the react frameworks that we'll be needing, mainly to implement the component features. 
the header of the class extends the properties of react.component, which we can use to customize our own components. 

looking at the body of the class: 
- constructor(props) is what brings props, or properties that are passed down to child components.
- render() is where you'll put the HTML element properties that you would normally just write into an index.html file, so for now we'll leave it as some basic filler stubs to start out with. the html inside the return() will be returned back to the main page that we use the Task class in, which will put the html we write in render() into the main App. as for the content, we'll be replacing the 00 with the actual time to countdown later!

the last line exports the class that we've written, so that we can import it into the main App file for usage! 

IMPLEMENTING TASK.JS
lets import our new class.
import Task from './Task';

create an instance in App.js, by putting <Task\> into the divs so it can be rendered into the app. your code should look like the following: 
return (
<div className="App">
    <Task/>
</div>
);

if you reload, voila - there's a clean page with a task inside!

TASKLIST.JS
but, we don't want to have a ton of tasks just floating around the application. let's make the component ii), which will contain the tasks. 
1 - create the file, components/TaskList.js
2 - we're going to need to import Task into TaskList, in addition to React.Component. use the following to add the class to your new file. 
import React from 'react';
import Task from './Task';

3 - copy paste the following header code to create a new class.
class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <h2>tasklist</h2>
          </div>
        )
      }
}
export default TaskList;

now we have a class that's function is to take in data and turn it into Task. for now, let's add some dummy data into App.js, so that we can 
implement TaskList.js and ensure that the functionality works. 

add the following line to App.js, under the line super(props) inside the constructor.
  this.state = {
    tasks: [
      { taskName: "this is a task!", timeRemaining: 3 },
      { taskName: "this is another task!", timeRemaining: 7 }
    ]
  };

you might be wondering, what is this new state property? though props (properties) and state seem like they would be similar, properties is 
reserved for data being passed down from the parent component whereas state is managed directly by the child component itself. when 
the state changes, the component will re-render. 

right now, there's not in there but a simple header to separate out the components. we have the data that we want to turn into Tasks, but how are we going to add in the task data from the main App?

the answer is: mapping!

{
    this.props.tasks.map(item => { // for each of the tasks recieved from main App
        // create a <Task> countdown element using properties
        return <Task name={item.taskName} timeRemaining={item.timeRemaining}/>
    })
}

mapping iterates through each of the elements in an array and sends them to a function - in this case, looking at the below code, each task is defined as "item", and is passed to the anonymous function that returns a <Task> object. the property values of item are extracted using brackets { }, and each Task object sets a property of each Task to the appropriate values. 

"property" - sound familiar? each of those properties that are item's values (name, timeRemaining) are what make up the child Task component's "props." that means, in constructor(props), props inside Task can be used to reference item.taskName and item.timeRemaining. 

props in each Task looks like the following: 
this.props = {
  name: item.taskName, 
  timeRemaining: item.timeRemaining
}

your code at the end shoud look similar to this: 
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

IMPLEMENT TASKLIST.JS
let's replace that individual <Task> from before with a new <TaskList>. can you guess how we would set this.props of TaskList to the data from the parent, this.state.tasks of App.js? 

    <TaskList tasks={this.state.tasks}/>

that's right, we would pass it in through the "properties" of TaskList, which makes it accessible by this.props later on. 

TASKCREATOR.JS
right now, our data is hardcoded. we're going to want to input data through some component, and update the data in the parent App. 

1 - create the component, components/TaskCreator.js
2 - add the function header
import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <h2>new task</h2>
              <input type="text" placeholder="title"></input>
              <input type="text" placeholder="duration (in seconds)"></input>
              <input type="button" value="done"></input>
          </div>
        )
      }
}
export default TaskCreator;

there's not much here, as the header itself is similar to the previous ones. you notice that to input, we have 2 input fields and a button to submit them to create a new task. 

however, in react we don't query the DOM by property values, like we would in vanilla HTML/CSS/JS. in this case, we should keep track of the state of the input boxes that the user is typing in, and update the state of the component until time of submission. 

add the behaviors to the inputs that we had above. 
  <input type="text" placeholder="title" onChange={this.updateParams}></input>
  <input type="text" placeholder="duration (in seconds)" onChange={this.updateParams}></input>
  <input type="button" value="done" onClick={this.createTask}></input>

looks familiar, right? as for the added functions, as a quick review: 
- placeholder is the background text that is removed as the user starts typing
- onChange triggers the function it equals when the value of the input is changed (so when the user types anything)
- onClick triggers the function when the input button is clicked

that means that for these inputs to work, we'll need to define 2 functions: updateParams() and createTask().

to send data to the parent to create a new task (createTask) from TaskCreator, we will need to modify the state of the main App. however, the child component doesn't have access to the parent's state, and the child component can't pass props back upwards to the parent component. 

to solve this, we do a linkage of the functions from the parent function and the child function. 

before we do anything, lets setup the connections between function and component. 
1 - create the function headers, outside of the constructor and above the render, in the class body. 
  createTask() {...}
  updateParams(event) {...}

2 - create the function bindings, in the constructor. 
  this.createTask = this.createTask.bind(this);
  this.updateParams = this.updateParams.bind(this);

...addTask() in App.js [TODO]
  addTask = (taskName, timeRemaining) => {    
    // update tasklist datastructure
    this.state.tasks.push({taskName, timeRemaining})
    this.setState({tasks:this.state.tasks})

    // update tasklist item (happens thorough setState)
  }
  
...updateParams() in TaskCreator.js
3 - add the following code to your new function. 

  // check which input field was updated, update state for that field
  if (event.target.placeholder == "title") {
      this.setState({
          // event.target is the caller field
          // event.target.value is the caller field's value; that is, the user's input in the box
          taskName: event.target.value
      })
  }
  else { // is duration input field
      this.setState({
          timeRemaining: event.target.value
      })
  }

the onChange function has details on the event by default, which includes the component input that triggered the event. that means that we can extract the information about the input by referencing the sender of the event, event.target, and taking its value. 

to keep things simple, we create only one function for reading parameters, since both set a state value but just in different parameters. to differentiate, we use conditionals that check the unique property of each input, the placeholder value. 

the state is then set in preparation to send to the parent. 

...CREATETASK() in TaskCreator.js
the connection between the parent and the state values set by updateParams() is established by createTask(). this function calls the parent-specific function that was passed down, createTask(taskName, timeRemaining) (note the different parameters, it's a different function!) to add the TaskCreator state data to the App state data. 

      // reference the function from App to call function reference
      this.props.addTask(this.state.taskName, this.state.timeRemaining)

we're going to want to ensure that the fields are both filled, so lets add a null check to ensure that the data is valid. 

    // ensure that both fields are filled out
    if (this.state.taskName == "" && this.state.timeRemaining == "") {
        console.log("error")
    }
    else {
        // reference the function from App to call function reference
        this.props.addTask(this.state.taskName, this.state.timeRemaining)
    }
    
APP.JS COUNTDOWN/DELETION FUNCTIONALITY

as any timer would, we will want to execute a function every second. to do this, we will utilize the javascript   
    setInterval(function, timeInterval)

setInterval deals with ms, meaning that 1000ms = 1s. since our input deals with seconds here, we will set the timeInterval to be 1000ms as we'll be updating the time left after every second. 

    setInterval(() {
      // <logic-to-adjust-time>
    }, 1000)

since we'll need to update the values of the countdown every second, which pulls from this.state, to update the list of tasks we'll need to setState(...) every second so that the time left will update. add the following code in your constructor for App.js. 

    // timer countdown to decrement tasks each second
    this.interval = setInterval(() => {
      for (let [index, task] of this.state.tasks.entries()) {
        // perform the oepration
        this.state.tasks[index].timeRemaining -= 1

        // if time is completed...
        if (task.timeRemaining <= 0) {
          // remove the task
          this.state.tasks.pop(index)
        }

        this.setState(this.state.tasks) // update state = update tasklist
      }
    }, 1000)

lets go through this code slowly.

the for-loop iterates over both the index/key and value of that key in the dictionary, by using .entries(), and the values are unpacked by the [ square brackets ] surrounding index and task. from there, all the tasks will need to subtract 1 second from their remaining time. the following code pops the task out of the tasks list if it reaches 0, so that when rerendering the task will effectively be deleted. 

===

congrats - now you should have a fully functional countdown app built in React.js! the source code is located at https://github.com/emily-yu/mongo-scheduler. Feel free to reference it if you get stuck or leave a comment on this tutorial. 

happy hacking