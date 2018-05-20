console.log('utils.js is running');

// export as defined (inline)
export const product = (a, b) => a * b;

const square = x => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// export vs export default

// There are 2 types of exports: named and default(exports everything as one package)
// named exports (can only have a single default export)
export { square, add, subtract as default };
