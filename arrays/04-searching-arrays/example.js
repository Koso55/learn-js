// Run this file with: node example.js

const fruits = ["apple", "banana", "cherry"];

console.log("includes('banana'):", fruits.includes("banana"));
console.log("includes('mango'):", fruits.includes("mango"));

console.log("indexOf('cherry'):", fruits.indexOf("cherry"));
console.log("indexOf('mango'):", fruits.indexOf("mango"));

const numbers = [1, 3, 4, 7, 8];
const firstEven = numbers.find((n) => n % 2 === 0);
console.log("first even number:", firstEven);

const noneOver100 = numbers.find((n) => n > 100);
console.log("first number over 100:", noneOver100);
