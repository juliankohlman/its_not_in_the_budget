// MUST RUN ON CLI
/* eslint react/jsx-filename-extension: "off" */
/* eslint react/react-in-jsx-scope: "off" */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: []
    };
  }

  // LIFECYCLE METHODS
  // can only be used with class based components
  componentDidMount() {
    const json = localStorage.getItem('options')
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

  // deleteOptions (able to pass this down to child components as a prop)
  deleteOptions() { // gets passed down to child component <Options />
    // implicit object return
    // must wrap objects in () when using setState updater function syntax
    this.setState(() => ({ options: [] }));
  }

  deleteOption(optionToDelete) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToDelete !== option),
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }

  addOption(option) {
    if (!option) {
      return 'Please enter a valid option.';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists.';
    }

    // using concat() to avoid manipulating state or prevState here directly
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// Default props for header

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => { // THIS FUNCTION IS THE EQUIVALENT TO render();
  return (
    <div>
      <button
        onClick={props.handlePick} // calling the handlePick prop
        disabled={!props.hasOptions} // accessing hasOptions prop
      >
        What should I do?
      </button>
    </div>
  );
};

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
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            deleteOption={props.deleteOption}
          />
        ))
      }
      <button onClick={props.deleteOptions}>Remove All</button>
    </div>
  );
};

/*
<p key={option}>{option}</p>
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
*/

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={e => {
          props.deleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  )
}


class AddOption extends React.Component {
  // need constructior b/c we're using this inside of handleAddOption
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    // default state
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) { // behavior specific for this component and its form
    e.preventDefault();

    const option = e.target.option.value.trim(); // const option = e.target.elements.option.value;
    const error = this.props.addOption(option)  // passed down from parent

    this.setState(() => ({ error }));

    this.refs.form.reset();
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <h3>AddOption</h3>
        <form onSubmit={this.handleAddOption} ref="form">
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// Presentational Component
// const User = (props) => { // NO ACCESS TO THIS MUST USE PROPS
//   return (
//     <div>
//       <h1>Stateless functional component</h1>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));