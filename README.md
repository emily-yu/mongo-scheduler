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

we'll start out with making i, the list of countdown items.

next, we'll make the countdown items contained by i. for each countdown, let's call it a "Task."
1 - make a file, Task.js
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
            <p>Remaining Time: 00ms</p>
          </div>
        )
      }
}
export default Task;

constructor(props) is what brings props, or properties that are passed between components.
render() is where you'll put the HTML element properties that you would normally just write into an index.html file, so for now we'll leave it as Hello World to start out with. 

3 - create an instance in App.js, by putting <Task\> into the divs so it can be rendered into the app. your code should look like the following: 
return (
<div className="App">
    <Task/>
</div>
);

if you reload, voila - there's a clean page with a task inside!