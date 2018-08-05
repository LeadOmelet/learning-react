import React from 'react';
import styleClasses from './Cockpit.css';

const cockpit = ( props ) => {
  let cssClasses = [];
  let btnClass = '';
  if(props.showPersons){
    btnClass = styleClasses.Red;
  }

  if(props.persons.length <= 2){
    cssClasses.push(styleClasses.red);
  }

  if(props.persons.length <= 1){
    cssClasses.push(styleClasses.bold);
  }

  return (
    <div className={styleClasses.Cockpit}>
      <h1>Hey!</h1>
      <p className={cssClasses.join(' ')}>This is really working.</p>
      <button className={btnClass} onClick={props.togglePersons}>Switch Names</button>
    </div>
  );
};

export default cockpit;
