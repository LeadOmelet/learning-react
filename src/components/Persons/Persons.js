import React, { Component } from 'react';
import Person from './Person/Person';

/* Converted stateless component into a stateful one. */
class Persons extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons; //false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    //Can cause side-effects ie AJAX calls if need be similar to componentDidMount.
  }

  render(){
    return this.props.people.map((person, index) => {
      return <Person
            clickHandler={() => this.props.deletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            inputChangeMethod={(event) => this.props.nameChange(event, person.id)} />
        });
    }
}

export default Persons;
