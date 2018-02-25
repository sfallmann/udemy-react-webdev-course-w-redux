'use strict';

console.log('app.js has been loaded');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Some text goes here!'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var userName = 'Sean Fallmann';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    'Age: 45'
  ),
  React.createElement(
    'p',
    null,
    'Location: Kernersville, NC'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
