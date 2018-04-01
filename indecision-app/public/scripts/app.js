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
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // stops full page refresh

  var option = e.target.elements.option.value; // element that event started (form)

  if (option) {
    // add option to database/app.options array
    app.options.push(option);
    // clear the options form
    e.target.elements.option.value = '';
  }
  // re-render
  renderApp();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var numbers = [17, 84, 1080];

var renderApp = function renderApp() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number: ',
        number
      );
    }),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
