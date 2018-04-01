console.log('hello world');

const appRoot = document.getElementById('app');

const details = {
  message: 'I\'m not a great programmer; I\'m just a good programmer with great habits.\n\n-Kent Beck',
  clicked: false
};

const toggleDetails = () => {
  details.clicked = true;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>Show details</button>
      {details.clicked && <p>{details.message}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();