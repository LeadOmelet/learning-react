import React from 'react';
import Person from './Person/Person';

const persons = ( props ) => {
  return props.people.map((person, index) => {
    return <Person
          clickHandler={() => props.deletePerson(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          inputChangeMethod={(event) => props.nameChange(event, person.id)} />
      });
}

export default persons;
