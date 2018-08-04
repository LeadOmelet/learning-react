import React from 'react'
import './Person.css';
import Radium from 'radium';

/* 'props' could be renamed but in the React community is often referred to as props. Props contain passed variables or attributes from JSX. */
const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p>I am {props.name} and I am {props.age} years old!</p>
      <p onClick={props.clickHandler}>{props.children}. children refers to any elements in between tag. This could be HTML, other React Components, text, etc.</p>
      <input type="text" onChange={props.inputChangeMethod} value={props.name} />
      {/* The above being a special two-way binding feature. */}
    </div>
  );
};

/*
Methods can be passed as a property. This is a COMMON pattern in React.

Equivalent to:
const person = function() {
  //...
}
*/

export default Radium(person);
