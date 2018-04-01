'use strict';

console.log('hello world');

var appRoot = document.getElementById('app');

var details = {
  message: 'I\'m not a great programmer; I\'m just a good programmer with great habits.\n\n-Kent Beck',
  clicked: false
};

var toggleDetails = function toggleDetails() {
  details.clicked = true;
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
      'Show details'
    ),
    details.clicked && React.createElement(
      'p',
      null,
      details.message
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
