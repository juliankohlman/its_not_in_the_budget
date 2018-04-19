import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  // need constructior b/c we're using this inside of handleAddOption
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    // default state
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    // behavior specific for this component and its form
    e.preventDefault();

    const option = e.target.option.value.trim(); // const option = e.target.elements.option.value;
    const error = this.props.addOption(option); // passed down from parent

    this.setState(() => ({ error }));

    this.refs.form.reset();
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <h3>AddOption</h3>
        <form onSubmit={this.handleAddOption} ref="form">
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
