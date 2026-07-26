// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.
// For all four functions: do NOT modify the array that gets passed in.
// (Hint: start with arr.slice() to get a copy to work with.)

// 1) Return a NEW array with the numbers sorted ascending (smallest first).
function sortAscending(numbers) {
  // TODO: your code here
}

// 2) Return a NEW array with the numbers sorted descending (largest first).
function sortDescending(numbers) {
  // TODO: your code here
}

// 3) Return a NEW array with the items in reverse order.
function reverseArray(arr) {
  // TODO: your code here
}

// 4) Return a NEW array containing only the first `n` items of `arr`.
function firstN(arr, n) {
  // TODO: your code here
}

// 5) Return a NEW array of words sorted by length, shortest first.
//    (Hint: strings have a .length too, just like arrays.)
function sortByLength(words) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("sortAscending([3,1,2]):", sortAscending([3, 1, 2]));
console.log("sortDescending([3,1,2]):", sortDescending([3, 1, 2]));
console.log("reverseArray([1,2,3]):", reverseArray([1, 2, 3]));
console.log("firstN(['a','b','c'], 2):", firstN(["a", "b", "c"], 2));
console.log(
  "sortByLength(['ccc','a','bb']):",
  sortByLength(["ccc", "a", "bb"])
);

module.exports = {
  sortAscending,
  sortDescending,
  reverseArray,
  firstN,
  sortByLength,
};
