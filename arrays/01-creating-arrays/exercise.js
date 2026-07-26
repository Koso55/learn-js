// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) Return an array literal containing the numbers 10, 20, 30 in that order.
function createNumbersArray() {
  // TODO: your code here
}

// 2) Return the first item of `arr` (index 0).
function getFirstItem(arr) {
  // TODO: your code here
}

// 3) Return the last item of `arr`.
//    Do NOT hardcode an index — use arr.length so it works for any array.
function getLastItem(arr) {
  // TODO: your code here
}

// 4) Return the item at `index`.
//    If `index` is out of range (less than 0, or too big for the array),
//    return the string "out of range" instead.
function getItemAt(arr, index) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("createNumbersArray():", createNumbersArray());
console.log("getFirstItem(['a','b','c']):", getFirstItem(["a", "b", "c"]));
console.log("getLastItem(['a','b','c']):", getLastItem(["a", "b", "c"]));
console.log("getItemAt(['a','b','c'], 1):", getItemAt(["a", "b", "c"], 1));
console.log("getItemAt(['a','b','c'], 9):", getItemAt(["a", "b", "c"], 9));

module.exports = { createNumbersArray, getFirstItem, getLastItem, getItemAt };
