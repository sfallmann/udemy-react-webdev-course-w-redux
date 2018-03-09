'use strict';
import React from 'react';

export default class AddOption extends React.Component {
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