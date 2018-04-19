import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';

class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  // constructor(props) {
  //   super(props);
  //   this.deleteOptions = this.deleteOptions.bind(this);
  //   this.deleteOption = this.deleteOption.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.addOption = this.addOption.bind(this);
  // }
  // deleteOptions (able to pass this down to child components as a prop)
  deleteOptions = () => {
    // gets passed down to child component <Options />
    // implicit object return
    // must wrap objects in () when using setState updater function syntax
    this.setState(() => ({ options: [] }));
  }

  deleteOption = (optionToDelete) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToDelete !== option)
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }

  addOption = (option) => {
    if (!option) {
      return 'Please enter a valid option.';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists.';
    }
    // using concat() to avoid manipulating state or prevState here directly
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  // LIFECYCLE METHODS
  // can only be used with class based components
  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if (options) this.setState(() => ({ options }));

    console.log('Fetching data');
  }

  // after state values change or after props change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

      console.log('saving data');
    }
  }

  componentWillUnmount(nextProps, nextState) {
    console.log('component will unmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0} // are there any options?
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options} // props
          deleteOptions={this.deleteOptions} // prop => deleteOptions method
          deleteOption={this.deleteOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

export default IndecisionApp;
