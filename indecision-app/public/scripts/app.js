'use strict';

// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react
/* eslint-disable */

var appRoot = document.getElementById('app');

var visibility = false;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'I\'m not a great programmer; I\'m just a good programmer with great habits. -Kent Beck'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
