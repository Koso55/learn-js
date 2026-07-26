// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) Return true if `value` is somewhere in `arr`, false otherwise.
function hasItem(arr, value) {
  // TODO: your code here
}

// 2) Return the index of `value` in `arr`, or -1 if it isn't there.
function indexOfItem(arr, value) {
  // TODO: your code here
}

// 3) Return the first even number in `numbers`, using .find().
//    Return undefined if there isn't one.
function findFirstEven(numbers) {
  // TODO: your code here
}

// 4) Return the first word in `words` that is longer than `length`
//    characters, using .find(). Return undefined if there isn't one.
function findFirstLongerThan(words, length) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("hasItem(['a','b'], 'b'):", hasItem(["a", "b"], "b"));
console.log("indexOfItem(['a','b'], 'b'):", indexOfItem(["a", "b"], "b"));
console.log("findFirstEven([1,3,4,7]):", findFirstEven([1, 3, 4, 7]));
console.log(
  "findFirstLongerThan(['hi','hello','hey'], 3):",
  findFirstLongerThan(["hi", "hello", "hey"], 3)
);

module.exports = { hasItem, indexOfItem, findFirstEven, findFirstLongerThan };
