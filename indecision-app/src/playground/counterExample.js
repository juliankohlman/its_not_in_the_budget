/* eslint semi: "off" */
/* eslint no-console: "off" */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne() {
    console.log('addOne');
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
        <h1> Counter Example </h1>
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