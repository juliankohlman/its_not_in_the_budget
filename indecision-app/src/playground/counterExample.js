/* eslint semi: "off" */
/* eslint no-console: "off" */
/* eslint react/jsx-filename-extension: "off" */
/* eslint react/react-in-jsx-scope: "off" */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      // all pieces of state we want to track
      // default state object
      count: 0
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('count');
    const count = JSON.parse(json);
    if (count !== 0) this.setState(() => ({ count }))

    console.log(count);
  }

  componentDidUpdate(prevProps, prevState) {

    const json = parseInt(this.state.count);
    localStorage.setItem('count', json);
    console.log('updating count', json);
  }

  addOne() {
    console.log('addOne');
    // this.setState({}) => allows component instance to re-render with manipulated state
    // updater-function style
    this.setState((prevState) => {
      // ONLY PROVIDE PIECES OF STATE THAT YOU WANT TO MANIPULATE/UPDATE
      return {
        count: prevState.count + 1,
      }
    })
  };

  minusOne() {
    console.log('minusOne');

    this.setState((prevState) => {
      return { count: prevState.count - 1 }
    })
  }

  // CALLS TO this.setState() are asynchronous b/c more is happening than just updating an obj
  reset() {
    console.log('reset');
    this.setState(() => {
      return { count: 0 }
    })
  }

  render() {
    return (
      <div>
        <h1>Counter Example</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}> +1 </button>
        <button onClick={this.minusOne}> -1 </button>
        <button onClick={this.reset}> reset </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
