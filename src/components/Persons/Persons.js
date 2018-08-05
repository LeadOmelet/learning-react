import React, { Component } from 'react';
import Person from './Person/Person';

/* Converted stateless component into a stateful one. */
class Persons extends Component {
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
