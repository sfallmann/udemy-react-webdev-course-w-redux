'use strict';

console.log('app.js has been loaded');

const app = {
  title: 'Indecision App',
  subtitle: 'Let your computer make the decision for you!',
  options: [],
  choice: undefined
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

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {

  if (!app.options.length)
    return;

  const rnd = Math.floor(Math.random() * app.options.length);
  app.choice = app.options[rnd]
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ app.options.length ? 'Here are your options' : 'No options' }</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {app.choice && <p>Choice: {app.choice}</p>}
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

