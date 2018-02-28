'use strict';

console.log('app.js has been loaded');

var app = {
  title: 'Indecision App',
  subtitle: 'Let your computer make the decision for you!',
  options: [],
  choice: undefined
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (!option) {
    return;
  }

  app.options.push(option);
  e.target.elements.option.value = '';
  render();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {

  if (!app.options.length) return;

  var rnd = Math.floor(Math.random() * app.options.length);
  app.choice = app.options[rnd];
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
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    app.choice && React.createElement(
      'p',
      null,
      'Choice: ',
      app.choice
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: 'option_' + i },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
