import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
/*
Components should start with a upper case character to prevent JSX from mis interpretting it as a DOM element.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey!</h1>
        <p>This is really working.</p>
        <Person name="Max" age="39" />
        <Person name="Josh" age="12">Hobbies include: Racing.</Person>
        <Person name="Ben" age="23" />
      </div>
    ); // ^^^ Looks like html, but is actually JSX.
  }
}

/*
Notes on JSX:
<div className="App">
  <h1>Hey!</h1>
</div>

is converted to...

React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hey!'));
^ Becomes a mess when there are lots of elements that is what we use the above HTML look-a-like.
___________________
className is used instead of class because JavaScript ES6 utilizes the keyword class.
*/

export default App;
