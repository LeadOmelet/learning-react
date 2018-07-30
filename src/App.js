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
      { name: "Jack", age: 39 }],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    // DO NOT DO THIS: this.state.persons[0].name = "Maxxy Boy";
    this.setState({persons:
        [
          { name: newName, age: 40 },
          { name: "B", age: 24 },
          { name: "J", age: 39 }
        ]
    });
  }

/* Text input */
  nameChangeHandler = (event) => {
    this.setState({persons:
        [
          { name: event.target.value, age: 40 },
          { name: "B", age: 24 },
          { name: "J", age: 39 }
        ]
    });
  }

  togglePersonsHandler = () => {
    const toggleShow = this.state.showPersons;
    this.setState({showPersons: !toggleShow});
  }

  render() {
    /* Inline Styling */
    const butStyle = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '2px solid cyan',
      padding: '8px',
      cursor: 'pointer'
    };

    /* Another way to toggle persons. */
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name} age={this.state.persons[0].age} inputChangeMethod={this.nameChangeHandler.bind(this)} />
          <Person
            name={this.state.persons[1].name} age={this.state.persons[1].age} clickHandler={this.switchNameHandler.bind(this, 'McMac')}>Hobbies include: Racing.</Person>
          <Person
            name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey!</h1>
        <p>This is really working.</p>
        <button style={butStyle} onClick={this.togglePersonsHandler}>Switch Names</button>
        {persons}
      </div>
    ); // ^^^ Looks like html, but is actually JSX. If statements don't work but ternaries ( condition ? ifTrueDoThis : ifFalseDoThis ) do.
  }
}

/*
() => this.switchNameHandler()
...is the equivalent of... (though can result in a performance hit)
this.switchNameHandler.bind(this, 'McDonalds')
*/

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
