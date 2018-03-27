/*eslint-disable */

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
      <li>Item one</li>
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

let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
