'use strict';

// MUST RUN ON CLI
/* eslint-disable */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// then run live server public

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'An app for getting things done.',
  options: ['Hex', 'Dec', 'Bin']
};

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length ? 'Here are your options' : 'No options'
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

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
