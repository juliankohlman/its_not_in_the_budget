/*eslint-disable */

// MUST RUN ON CLI

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// then run live server public

console.log('App.js is running');

let app = {
  title: 'Indecision App',
  subtitle: 'An app for getting things done.',
  options: ['Hex', 'Dec', 'Bin']
};

// JSX - Javascript XML
let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

let user = {
  name: 'Julian',
  age: 33,
  location: 'Burlingame'
};

// booleans get ignored (do not get rendered)
let getLocation = (location) => {
  if (location) return <p>location: {location}</p>
};

// true && truthy value => render truthy value
// false && truthy value => false(a boolean) gets ignored (not rendered)
let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >=  18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
