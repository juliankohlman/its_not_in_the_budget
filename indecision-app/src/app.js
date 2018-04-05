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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  // key is a reserved word
  // optionText={option} prop is available to the option component
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
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
  render() {
    return (
      <div>
        <h3>AddOption component here.</h3>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));