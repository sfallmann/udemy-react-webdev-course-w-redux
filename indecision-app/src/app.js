'use strict';

console.log('app.js has been loaded');

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>Some text goes here!</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const userName = 'Sean Fallmann';
const templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: 45</p>
    <p>Location: Kernersville, NC</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);