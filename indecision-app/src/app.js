/*eslint-disable */

// MUST RUN ON CLI

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// then run live server public

console.log('App.js is running');
let appObject = {
  title: 'MAIN TITLE',
  subtitle: 'sub title'
};

// JSX - Javascript XML
let template = (
  <div>
    <h1>{appObject.title}</h1>
    <p>{appObject.subtitle}</p>
    <ol>
      <li>Item ONE</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

let user = {
  name: 'Julian',
  age: 33,
  location: 'Maryland'
};

let userName = 'Matt';
let userAge = 35;
let userLocation = 'New York';

let getLocation = (location) => {
  if (location) return <p>location: {location}</p>
};

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
