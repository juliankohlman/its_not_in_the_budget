'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// MUST RUN ON CLI
/* eslint-disable */
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      options: ['Thing one', 'Thing two', 'Thing boom']
    };
    return _this;
  }

  // deleteOptions (able to pass this down to child components as a prop)


  _createClass(IndecisionApp, [{
    key: 'deleteOptions',
    value: function deleteOptions() {
      // gets passed down to child component <Options />
      this.setState(function () {
        return { options: [] };
      });
    }

    // const onMakeDecision = () => {
    //   const randomNum = Math.floor(Math.random() * app.options.length);
    //   const option = app.options[randomNum];
    //   alert(option);
    // }

  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var pick = this.state.options[randomNum];
      alert(pick);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0 // are there any options?
          , handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options // props
          , deleteOptions: this.deleteOptions // prop => deleteOptions method
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick // attributes for button
            , disabled: !this.props.hasOptions // accessing hasOptions prop
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);
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

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',

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

    value: function render() {
      // deleteOptions is passed down to options
      return React.createElement(
        'div',
        null,
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(
          'button',
          { onClick: this.props.deleteOptions },
          'Remove All'
        )
      );
    }
  }]);

  return Options;
}(React.Component);

/*
<p key={option}>{option}</p>
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
*/

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Option: ',
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.option.value.trim();
      // const option = e.target.elements.option.value;
      if (option) {
        alert('' + option);
        e.target.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'AddOption'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
