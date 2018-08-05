import React, { Component } from 'react';
import styleClasses from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '12sf2', name: "Max", age: 39 },
      { id: 'm2k4c', name: "Bonnie", age: 23 },
      { id: 'k3odi4', name: "Jack", age: 39 }],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
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
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <Persons
          people={this.state.persons}
          nameChange={this.nameChangeHandler}
          deletePerson={this.deletePersonHandler} />
      );
    }


    return (
      <div className={styleClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersons={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
