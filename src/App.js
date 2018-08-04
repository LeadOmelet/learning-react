import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
//Radium helps with MediaQueries, PseudoSelectors, etc.
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
      { id: '12sf2', name: "Max", age: 39 },
      { id: 'm2k4c', name: "Bonnie", age: 23 },
      { id: 'k3odi4', name: "Jack", age: 39 }],
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
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; //Is person I am looking for?
    });

    const person = {
      ...this.state.persons[personIndex] //... is spread operator. Copies instead of merely creating reference of the array.
    };

    person.name = event.target.value;

    const people = [...this.state.persons];
    people[personIndex] = person;

    this.setState({ persons: people });
  }

  togglePersonsHandler = () => {
    const toggleShow = this.state.showPersons;
    this.setState({showPersons: !toggleShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [ ...this.state.persons ]; //spreads or slice method copies object from old array. Before we had merely a reference that could cause bugs in the future.
    persons.splice(personIndex, 1); //Removes one element from array starting at personIndex
    this.setState({persons: persons});
  }

  render() {
    /* Inline Styling */
    const butStyle = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '2px solid cyan',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightblue',
        color: 'black'
      }
    };
    /*
    Radium allows us to use PseudoSelectors (such as :hover).
    */

    /* Another way to toggle persons. */
    let persons = null;
    //The below maps the state persons array to JSX elements if showPersons is true.
    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              clickHandler={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              inputChangeMethod={(event) => this.nameChangeHandler(event, person.id)} />
          }) }
        </div>
      );
      butStyle.backgroundColor = 'red';
      butStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    /* Keys help maintain lists thus making DOM only update needed places rather than whole list. Index is not a good idea to use as a key as it will change upon list change. Instead usually references to unique resource ids are preferred. */
    let cssClasses = [];
    if(this.state.persons.length <= 2){
      cssClasses.push('red');
    }

    if(this.state.persons.length <= 1){
      cssClasses.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hey!</h1>
        <p className={cssClasses.join(' ')}>This is really working.</p>
        <button style={butStyle} onClick={this.togglePersonsHandler}>Switch Names</button>
        {persons}
      </div>
      </StyleRoot>
    ); // ^^^ Looks like html, but is actually JSX. If statements don't work but ternaries ( condition ? ifTrueDoThis : ifFalseDoThis ) do.
  } // StyleRoot element is needed for Radium to use MediaQueries and CSS Keyframes.
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

export default Radium(App);
