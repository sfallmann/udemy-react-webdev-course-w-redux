'use strict';

console.log('app.js has been loaded');

var app = {
  title: 'Visibility Toggle',
  visible: false
};

var onToggle = function onToggle() {

  app.visible = !app.visible;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      app.visible ? "Hide Details" : "Show Details"
    ),
    app.visible && React.createElement(
      'p',
      null,
      'Now you can see the details'
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
