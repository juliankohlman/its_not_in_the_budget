'use strict';

/*eslint-disable */

// MUST RUN ON CLI

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

var user = {
  name: 'Julian',
  age: 33,
  location: 'Burlingame'
};

// booleans get ignored (do not get rendered)
var getLocation = function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'location: ',
    location
  );
};

// true && truthy value => render truthy value
// false && truthy value => false(a boolean) gets ignored (not rendered)
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
