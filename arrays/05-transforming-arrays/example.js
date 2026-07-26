// Run this file with: node example.js

const numbers = [1, 2, 3];

const squares = numbers.map((n) => n * n);
console.log("squares:", squares);
console.log("original numbers unchanged:", numbers);

const evens = numbers.filter((n) => n % 2 === 0);
console.log("evens:", evens);

const evenSquares = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * n);
console.log("evenSquares:", evenSquares);
