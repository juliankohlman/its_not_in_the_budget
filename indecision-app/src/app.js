// MUST RUN ON CLI
/* eslint-disable */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: [],
    }
  }

  // deleteOptions (able to pass this down to child components as a prop)
  deleteOptions() { // gets passed down to child component <Options />
    this.setState(() => {
      return { options: [] };
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }

  addOption(option) {
    this.setState((prevState) => {
      // using concat to avoid manipulating state or prev state here directly
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0} // are there any options?
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options} // props
          deleteOptions={this.deleteOptions} // prop => deleteOptions method
        />
        <AddOption addOption={this.addOption}/>
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
        <button
          onClick={this.props.handlePick} // calling the handlePick prop
          disabled={!this.props.hasOptions} // accessing hasOptions prop
        >
          What should I do?
        </button>
      </div>
    );
  }
}
/*
  Component State: (State is just an object that changes based on events)
    - allows components to manage some data
    - when data changes component re-renders itself automatically

    * Setting up state
      - Create default state of values
      1. set up the default state obj --> app renders itself for the very first time
      2. Component is rendered with default state values* --> happens behind the schenes
      3. Change state based on event --> some UI event occurs
      4. The component re-renders using new state values
      5. Start at step 3 again
*/


class Options extends React.Component {
  // key is a reserved word
  // optionText={option} prop is available to the option component

  // constructor(props) { // same as this.props inside render();
  //   super(props); // set access to this.props
  //   // more efficient handleRemoveAll is bound once and we're good togo
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this); // context in constructor is correct by default
  // }

  // RemoveAll handler
  // handleRemoveAll() {
  //   // alert('remove all handler');
  //   console.log(this.props.options)
  // }

  render() {
    // deleteOptions is passed down to options
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <button onClick={this.props.deleteOptions}>Remove All</button>
      </div>
    );
  }
}

/*
<p key={option}>{option}</p>
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
*/

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}


class AddOption extends React.Component {
  // need constructior b/c we're using this inside of handleAddOption
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) { // behavior specific for this component and its form
    e.preventDefault();

    const option = e.target.option.value.trim();
    // const option = e.target.elements.option.value;

    if (option) {
      this.props.addOption(option) // passed down from parent
    }

    this.refs.button.reset();
  }

  render() {
    return (
      <div>
        <h3>AddOption</h3>
        <form onSubmit={this.handleAddOption} ref="button">
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));