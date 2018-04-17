import subtract, { square, add } from './utils';
import isSenior, { canDrink, isAdult } from './person'; // relative file path

console.log('app.js is running!!');

console.log(square(4));
console.log(add(12, 26));
console.log(subtract(11, 7));


console.log(canDrink(33));
console.log(isAdult(12));
console.log(isSenior(60));

