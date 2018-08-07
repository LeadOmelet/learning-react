import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleClass from './Person.css';

class Person extends Component {
  render(){
    return (
      <div className={styleClass.Person}>
        <p>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p onClick={this.props.clickHandler}>{this.props.children}. children refers to any elements in between tag. This could be HTML, other React Components, text, etc.</p>
        <input type="text" onChange={this.props.inputChangeMethod} value={this.props.name} />
      </div>
    );
  }
}

Person.propTypes = {
  clickHandler: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  inputChangeMethod: PropTypes.func
};

export default Person;
