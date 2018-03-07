class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleAddOption(option) {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return `"${option} already exists in list of options`;
    }

    this.setState((prevState) => {
      return {options: prevState.options.concat(option)};
    })
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {options: []}
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {

    const subtitle = "Your life in your computer's hands!";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  ) 
}

Header.defaultProps = {
  title: 'Indecision',
}

const Action = (props) => {
  return (
    <div>
      
      <button 
        disabled={!props.hasOptions} 
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  );
}

const Option = (props) => {
  return <li>{props.optionText}</li>
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      <p>Options</p>
      <ol>
        {
          props.options.map((option, i) => <Option key={`option_${i}`} optionText={option} />)
        }
      </ol>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }


  handleFormSubmit(e) {

    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = '';

    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {error}
    })
    
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input name="option" type="text"/>
        <button>Add Option</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));