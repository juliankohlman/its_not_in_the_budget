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

var multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  multiplyBy: 4,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (n) {
      return n * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
