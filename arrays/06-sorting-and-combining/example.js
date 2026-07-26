// Run this file with: node example.js

const numbers = [10, 1, 2];
console.log("default sort (wrong for numbers):", numbers.slice().sort());

console.log("ascending:", numbers.slice().sort((a, b) => a - b));
console.log("descending:", numbers.slice().sort((a, b) => b - a));

const original = [3, 1, 2];
const sorted = original.slice().sort((a, b) => a - b);
console.log("sorted copy:", sorted);
console.log("original unchanged:", original);

const reversed = [1, 2, 3].slice().reverse();
console.log("reversed copy:", reversed);

const letters = ["a", "b", "c", "d"];
console.log("slice(0, 2):", letters.slice(0, 2));

console.log("join(', '):", ["a", "b", "c"].join(", "));
