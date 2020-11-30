const fib = require('./fib');
const shift = require('./shift');
const secondMax = require('./secondMax');
const fizzBuzz = require('./fizzBuzz');

console.log('--- Fibonacci Sequence ---');
console.log(fib(1));
console.log(fib(3));
console.log(fib(12));

console.log('--- Array shift ---');
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4 ,5], 'right', 3));

console.log('--- Second max ---');
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
try {
  console.log(secondMax([]));
} catch(err) {
  console.log(err.message);
}

console.log('--- FizzBuzz ---');
console.log(fizzBuzz(21));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));