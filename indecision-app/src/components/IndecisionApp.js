'use strict';
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {

  state = {
    options: []
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

  handleAddOption = (option) => {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return `"${option}" already exists in list of options`;
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({options: prevState.options.filter((opt) => opt !== option )}))
  }

  handlePick = () => {
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