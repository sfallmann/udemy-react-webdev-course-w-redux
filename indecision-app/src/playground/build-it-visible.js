'use strict';

console.log('app.js has been loaded');

const app = {
  title: 'Visibility Toggle',
  visible: false
}

const onToggle = () => {

  app.visible = !app.visible;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggle}>{app.visible ? "Hide Details" : "Show Details" }</button>
      {app.visible && <p>Now you can see the details</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}


render();



