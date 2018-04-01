'use strict';

// arrow functions

var square = function square(x) {
  return Math.pow(x, 2);
};

console.log(square(7));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Linus Torvald'));
