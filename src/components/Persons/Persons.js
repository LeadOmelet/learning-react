import React, { PureComponent } from 'react';
import Person from './Person/Person';

/* Converted 'Componenet' use to 'PureComponent' usage. Difference being that 'PureComponent' already takes care of 'shouldComponentUpdate' checking automatically via props and states comparisons. */
class Persons extends PureComponent {
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside constructor.');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

/*
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //return true;
    return nextProps.people !== this.props.people ||
    nextProps.nameChange !== this.props.nameChange ||
    nextProps.deletePerson !== this.props.deletePerson; //false;
  }
*/

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
