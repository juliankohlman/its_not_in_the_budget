'use strict';

/*eslint-disable */

console.log('App.js is running');
var appObject = {
  title: 'MAIN TITLE',
  subTitle: 'sub title'
};

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  React.createElement(
    'p',
    null,
    appObject.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    ),
    React.createElement(
      'li',
      null,
      'Item three'
    )
  )
);

var user = {
  name: 'Julian',
  age: 33,
  location: 'Maryland'
};

var userName = 'Matt';
var userAge = 35;
var userLocation = 'New York';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
