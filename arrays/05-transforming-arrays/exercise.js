// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) Return a new array with the square of every number in `numbers`.
//    Use .map(). Example: [1, 2, 3] -> [1, 4, 9]
function squareAll(numbers) {
  // TODO: your code here
}

// 2) Return a new array containing only the even numbers from `numbers`.
//    Use .filter(). Example: [1, 2, 3, 4] -> [2, 4]
function keepEvens(numbers) {
  // TODO: your code here
}

// 3) Return a new array with every word in `words` converted to upper case.
//    Use .map() and the string method .toUpperCase().
//    Example: ["a", "b"] -> ["A", "B"]
function upperCaseAll(words) {
  // TODO: your code here
}

// 4) Return a new array with the squares of only the EVEN numbers in
//    `numbers`. Use .filter() then .map().
//    Example: [1, 2, 3, 4] -> [4, 16]
function squareEvens(numbers) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("squareAll([1,2,3]):", squareAll([1, 2, 3]));
console.log("keepEvens([1,2,3,4]):", keepEvens([1, 2, 3, 4]));
console.log("upperCaseAll(['a','b']):", upperCaseAll(["a", "b"]));
console.log("squareEvens([1,2,3,4]):", squareEvens([1, 2, 3, 4]));

module.exports = { squareAll, keepEvens, upperCaseAll, squareEvens };
