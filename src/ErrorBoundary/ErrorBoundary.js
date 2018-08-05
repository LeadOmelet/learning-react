import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if(this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
/*
Only use ErrorBoundaries in case where you know something may fail but you have no control over it. Such as remote API calls, etc.
ErrorBoundaries show up in production environments but not development.
Keys must be on the outer elements (ie ErrorBoundaries) as ErrorBoundaries must wrap elements being tested.
*/
