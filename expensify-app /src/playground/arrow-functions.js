// arrow functions

const square = x => x ** 2

console.log(square(7))

const getFirstName = fullName => fullName.split(' ')[0]

console.log(getFirstName('Linus Torvald'))

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  multiplyBy: 4,
  multiply () {
    return this.numbers.map(n => n * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
