import React from 'react';
import styleClass from './Person.css';

const person = (props) => {

  return (
    <div className={styleClass.Person}>
      <p>I am {props.name} and I am {props.age} years old!</p>
      <p onClick={props.clickHandler}>{props.children}. children refers to any elements in between tag. This could be HTML, other React Components, text, etc.</p>
      <input type="text" onChange={props.inputChangeMethod} value={props.name} />
    </div>
  );
};

export default person;
