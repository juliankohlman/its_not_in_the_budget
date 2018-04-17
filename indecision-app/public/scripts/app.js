'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AddOption = require('./components/AddOption');

var _AddOption2 = _interopRequireDefault(_AddOption);

var _Option = require('./components/Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.deleteOption = _this.deleteOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  // LIFECYCLE METHODS
  // can only be used with class based components


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem("options");
      var options = JSON.parse(json);

      if (options) this.setState(function () {
        return { options: options };
      });

      console.log("Fetching data");
    }

    // after state values change or after props change

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);

        console.log("saving data");
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(nextProps, nextState) {
      console.log("component will unmount");
    }

    // deleteOptions (able to pass this down to child components as a prop)

  }, {
    key: 'deleteOptions',
    value: function deleteOptions() {
      // gets passed down to child component <Options />
      // implicit object return
      // must wrap objects in () when using setState updater function syntax
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'deleteOption',
    value: function deleteOption(optionToDelete) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToDelete !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var pick = this.state.options[randomNum];
      alert(pick);
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (!option) {
        return "Please enter a valid option.";
      } else if (this.state.options.includes(option)) {
        return "This option already exists.";
      }

      // using concat() to avoid manipulating state or prevState here directly
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Put your life in the hands of a computer";

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Header, { subtitle: subtitle }),
        _react2.default.createElement(Action, {
          hasOptions: this.state.options.length > 0 // are there any options?
          , handlePick: this.handlePick
        }),
        _react2.default.createElement(Options, {
          options: this.state.options // props
          , deleteOptions: this.deleteOptions // prop => deleteOptions method
          , deleteOption: this.deleteOption
        }),
        _react2.default.createElement(_AddOption2.default, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(_react2.default.Component);

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && _react2.default.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// Default props for header

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(props) {
  // THIS FUNCTION IS THE EQUIVALENT TO render();
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      {
        onClick: props.handlePick // calling the handlePick prop
        , disabled: !props.hasOptions // accessing hasOptions prop
      },
      'What should I do?'
    )
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

var Options = function Options(props) {
  // key is a reserved word
  // optionText={option} prop is available to the option component

  // constructor(props) { // same as this.props inside render();
  //   super(props); // set access to this.props
  //   // more efficient handleRemoveAll is bound once and we're good togo
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this); // context in constructor is correct
  // by default
  // }
  // deleteOptions is passed down to options
  return _react2.default.createElement(
    'div',
    null,
    props.options.length === 0 && _react2.default.createElement(
      'p',
      null,
      'Please add an option to get started!'
    ),
    props.options.map(function (option) {
      return _react2.default.createElement(_Option2.default, {
        key: option,
        optionText: option,
        deleteOption: props.deleteOption
      });
    }),
    _react2.default.createElement(
      'button',
      { onClick: props.deleteOptions },
      'Remove All'
    )
  );
};

/*
<p key={option}>{option}</p>
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
*/

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

_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), document.getElementById("app"));
