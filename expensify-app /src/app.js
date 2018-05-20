import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// props => stateless functional component
// this.props => class based component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
