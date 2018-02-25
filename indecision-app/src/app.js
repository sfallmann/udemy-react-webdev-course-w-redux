'use strict';

console.log('app.js has been loaded');

const app = {
  title: 'Indecision App',
  subtitle: 'It will make the decision for you!'
}


const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Sean Fallmann',
  age: 45,
  location: 'Kernersville, NC'
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);