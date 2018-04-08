// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react
/* eslint semi: "off" */
/* eslint no-console: "off" */
/* eslint react/jsx-filename-extension: "off" */
/* eslint react/react-in-jsx-scope: "off" */

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    // handler method
    this.toggle = this.toggle.bind(this);
    // visibility state
    this.state = {
      visibility: false,
    }
  }

  toggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>I'm not a great programmer; I'm just a good programmer with great habits. -Kent Beck</p>
          </div>
        )}
      </div>
    );
  }
}

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleDetails = () => {
//   visibility = !visibility;
//   renderApp();
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>I'm not a great programmer; I'm just a good programmer with great habits. -Kent Beck</p>
//         </div>
//       )}
//     </div>
//   );

// }
// renderApp();

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
