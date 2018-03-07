class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    const state = localStorage.getItem('state');
    if (!state) return;
    try {
      this.setState(() => JSON.parse(state));
    }
    catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state);
      localStorage.setItem('state', json)
    }
  }  

  componentWillUnmount() {

  }

  handleAddOption(option) {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return `"${option}" already exists in list of options`;
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({options: prevState.options.filter((opt) => opt !== option )}))
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
          handleDeleteOption={this.handleDeleteOption}
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
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option, i) => (
          <Option 
            key={`option_${i}`} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
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
    const error = this.props.handleAddOption(option);

    if (!error) e.target.elements.option.value = '';

    this.setState(() => ({error}))
    
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