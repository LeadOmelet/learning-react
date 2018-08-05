import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/*
Typically only one root component is rendered. All other components are nested in the app component.
*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
