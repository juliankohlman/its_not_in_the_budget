'use strict';

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// relative file path

console.log('app.js is running!!');

console.log((0, _utils.square)(4));
console.log((0, _utils.add)(12, 26));
console.log((0, _utils2.default)(11, 7));

console.log((0, _person.canDrink)(33));
console.log((0, _person.isAdult)(12));
console.log((0, _person2.default)(60));
