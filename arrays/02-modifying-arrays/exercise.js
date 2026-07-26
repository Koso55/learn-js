// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) Set the item at index 1 of `arr` to `newValue`, then return `arr`.
function changeSecondItem(arr, newValue) {
  // TODO: your code here
}

// 2) Add `value` to the end of `arr` using push, then return `arr`.
function addToEnd(arr, value) {
  // TODO: your code here
}

// 3) Remove the last item from `arr` and return the REMOVED VALUE
//    (not the array).
function removeFromEnd(arr) {
  // TODO: your code here
}

// 4) Remove the first item from `arr` and add it to the end instead.
//    Return the modified array.
//    Example: [1, 2, 3] -> [2, 3, 1]
function moveFirstToLast(arr) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("changeSecondItem([1,2,3], 99):", changeSecondItem([1, 2, 3], 99));
console.log("addToEnd([1,2,3], 4):", addToEnd([1, 2, 3], 4));
console.log("removeFromEnd([1,2,3]):", removeFromEnd([1, 2, 3]));
console.log("moveFirstToLast([1,2,3]):", moveFirstToLast([1, 2, 3]));

module.exports = { changeSecondItem, addToEnd, removeFromEnd, moveFirstToLast };
