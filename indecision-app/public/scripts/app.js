'use strict';

console.log('app.js has been loaded');

var app = {
  title: 'Indecision App',
  subtitle: 'Let your computer make the decision for you!',
  options: ['choice one', 'choice two']
};

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

/*
const user = {
  name: 'Sean Fallmann',
  age: 45,
  location: 'Kernersville, NC'
}

const templateTwo = (
  <div>
    <h1>{ (user.name) ? user.name : 'Anonymous' }</h1>
    { user.age >= 18 && <p>Age: {user.age}</p> }
    <p>Location: { (user.location) ? user.location : 'Unknown' }</p>
  </div>
);
*/

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne');
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('minusOne');
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1 '
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      ' -1 '
    ),
    React.createElement(
      'button',
      { onClick: reset },
      ' Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
