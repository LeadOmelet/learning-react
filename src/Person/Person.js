import React from 'react'

/* 'props' could be renamed but in the React community is often referred to as props. Props contain passed variables or attributes from JSX. */
const person = (props) => {
  return (
    <div>
      <p>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}. children refers to any elements in between tag. This could be HTML, other React Components, text, etc.</p>
    </div>
  );
};

/*
Equivalent to:
const person = function() {
  //...
}
*/

export default person;
