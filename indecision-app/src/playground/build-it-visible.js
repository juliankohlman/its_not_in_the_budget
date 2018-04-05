// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react
/* eslint-disable */

const appRoot = document.getElementById('app');

let visibility = false;

const toggleDetails = () => {
  visibility = !visibility;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>I'm not a great programmer; I'm just a good programmer with great habits. -Kent Beck</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();