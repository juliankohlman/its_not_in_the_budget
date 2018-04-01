// MUST RUN ON CLI
/* eslint-disable */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// then run live server public

console.log('App.js is running');

let app = {
  title: 'Indecision App',
  subtitle: 'An app for getting things done.',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // stops full page refresh

  const option = e.target.elements.option.value // element that event started (form)

  if (option) {
    // add option to database/app.options array
    app.options.push(option);
    // clear the options form
    e.target.elements.option.value = '';
  }
  // re-render
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const numbers = [17, 84, 1080];

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
      }
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
