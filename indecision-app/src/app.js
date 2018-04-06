// MUST RUN ON CLI
/* eslint-disable */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];


    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
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

  constructor(props) { // same as this.props inside render();
    super(props); // set access to this.props
    // more efficient handleRemoveAll is bound once and we're good togo
    this.handleRemoveAll = this.handleRemoveAll.bind(this); // context in constructor is correct by default
  }

  // RemoveAll handler
  handleRemoveAll() {
    // alert('remove all handler');
    console.log(this.props.options)
  }

  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <button onClick={this.handleRemoveAll}>Remove All</button>
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

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    // const option = e.target.elements.option.value;
    if (option) {
      alert(`${option}`)
      e.target.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <h3>AddOption</h3>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));