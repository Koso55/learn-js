// Run this file with: node example.js

const numbers = [10, 20, 30];

console.log("-- for loop --");
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

console.log("-- for...of loop --");
for (const number of numbers) {
  console.log(number);
}

console.log("-- forEach --");
numbers.forEach((number) => {
  console.log(number);
});
