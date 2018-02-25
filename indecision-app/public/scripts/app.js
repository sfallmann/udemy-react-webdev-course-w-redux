console.log('app.js has been loaded');

var template = React.createElement(
  "h1",
  { id: "someid"},
  "Something new goes here!"
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);