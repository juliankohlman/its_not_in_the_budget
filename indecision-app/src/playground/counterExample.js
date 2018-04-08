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
      count: 0,
    };
  }

  addOne() {
    console.log('addOne');
    // this.setState({}) => allows component instance to re-render with manipulated state
    this.setState((prevState) => {
      // ONLY PROVIDE PIECES OF STATE THAT YOU WANT TO MANIPULATE/UPDATE
      return {
        count: prevState.count + 1,
      }
    })
  };

  minusOne() {
    console.log('minusOne');
  }

  reset() {
    console.log('reset');
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
// let count = 0;

// const addOne = () => {
//   count++
//   renderCounterApp();
// }

// const minusOne = () => {
//   count--
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// renderCounterApp();