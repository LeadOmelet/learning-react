import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
/*
Components should start with a upper case character to prevent JSX from mis interpretting it as a DOM element.
*/

class App extends Component {
  /*
  States are not availble in function components (only in classes that extend the Component class).
  States are global. Be careful!
  */
  state = {
    persons: [
      { name: "Max", age: 39 },
      { name: "Bonnie", age: 23 },
      { name: "Jack", age: 39 }]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
    // DO NOT DO THIS: this.state.persons[0].name = "Maxxy Boy";
    this.setState({persons:
        [
          { name: "M", age: 40 },
          { name: "B", age: 24 },
          { name: "J", age: 39 }
        ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hey!</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies include: Racing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
