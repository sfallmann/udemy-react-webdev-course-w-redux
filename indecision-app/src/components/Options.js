'use strict';
import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Options</h3>
      <button 
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove all
      </button>    
    </div>

    {props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
    {
      props.options.map((option, i) => (
        <Option 
          key={`option_${i}`} 
          optionText={option}
          count={i + 1} 
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
)

export default Options;