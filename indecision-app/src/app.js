'use strict';

console.log('app.js has been loaded');

const app = {
  title: 'Indecision App',
  subtitle: 'Let your computer make the decision for you!',
  options: ['choice one', 'choice two']
}


const template = (
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p> }
    <p>{ app.options.length ? 'Here are your options' : 'No options' }</p>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
  </div>
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

let count = 0;

const addOne = () => {
  console.log('addOne');
}

const minusOne = () => {
  console.log('minusOne');
}

const reset = () => {
  console.log('reset');
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}> +1 </button>
    <button onClick={minusOne}> -1 </button>
    <button onClick={reset}> Reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);