'use strict';

console.log('app.js has been loaded');

const app = {
  title: 'Indecision App',
  subtitle: 'Let your computer make the decision for you!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (!option) {
    return;
  }

  app.options.push(option);
  e.target.elements.option.value = '';
  render();
}

const removeAll = () => {
  app.options = [];
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ app.options.length ? 'Here are your options' : 'No options' }</p>
      <p>Options Count: {app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option, i) => {
            return <li key={`option_${i}`}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}


render();

