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