import React from 'react';
import Option from './Option'; // child component

const Options = (props) => {
  // key is a reserved word
  // optionText={option} prop is available to the option component

  // constructor(props) { // same as this.props inside render();
  //   super(props); // set access to this.props
  //   // more efficient handleRemoveAll is bound once and we're good togo
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this); // context in constructor is correct
  // by default
  // }
  // deleteOptions is passed down to options
  return (
    <div>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          deleteOption={props.deleteOption}
        />
      ))}
      <button onClick={props.deleteOptions}>Remove All</button>
    </div>
  );
};

export default Options;
