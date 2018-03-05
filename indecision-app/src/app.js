class IndecisionApp extends React.Component {
  render() {

    const title = "Indecision App";
    const subtitle = "Your life in your computer's hands!";
    const options = ['One', 'Two', 'Four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    ) 
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.optionText}</li>
  }
}

class Options extends React.Component {
  render() {

    return (
      <div>
        <p>Options</p>
        <ol>
          {
            this.props.options.map((option, i) => <Option key={`option_${i}`} optionText={option} />)
          }
        </ol>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add Option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));