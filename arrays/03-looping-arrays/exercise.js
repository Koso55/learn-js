// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) Return the sum of all numbers in `arr`, using a for loop.
function sumArray(arr) {
  // TODO: your code here
}

// 2) Return how many items in `arr` are greater than `threshold`,
//    using a loop.
function countGreaterThan(arr, threshold) {
  // TODO: your code here
}

// 3) Build and return a string that joins every item in `words` with "-",
//    using a loop (don't use the built-in .join() method here).
//    Example: ["a", "b", "c"] -> "a-b-c"
function joinWithDash(words) {
  // TODO: your code here
}

// 4) Build and return a NEW array where every number in `arr` is doubled,
//    using a loop. Do not modify the original array.
//    Example: [1, 2, 3] -> [2, 4, 6]
function doubleAll(arr) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("sumArray([1,2,3]):", sumArray([1, 2, 3]));
console.log("countGreaterThan([1,5,10], 4):", countGreaterThan([1, 5, 10], 4));
console.log("joinWithDash(['a','b','c']):", joinWithDash(["a", "b", "c"]));
console.log("doubleAll([1,2,3]):", doubleAll([1, 2, 3]));

module.exports = { sumArray, countGreaterThan, joinWithDash, doubleAll };
