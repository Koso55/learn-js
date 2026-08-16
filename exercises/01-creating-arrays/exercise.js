// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) You're starting your grocery run. Return an array literal containing,
//    in this exact order: "milk", "eggs", "bread".
function createGroceryList() {
  // TODO: your code here
}

// 2) `list` is a grocery list. Return the first item on it.
function getFirstItem(list) {
  // TODO: your code here
}

// 3) Return the last item on `list` — the one added most recently.
//    Do NOT hardcode an index — use list.length so it works for any list.
function getLastItem(list) {
  // TODO: your code here
}

// 4) Return the item at position `position` on `list`.
//    If `position` doesn't exist on the list (too big, or negative),
//    return the string "nothing there" instead.
function getItemAt(list, position) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("createGroceryList():", createGroceryList());
console.log(
  "getFirstItem(['coffee','oat milk','bananas']):",
  getFirstItem(["coffee", "oat milk", "bananas"])
);
console.log(
  "getLastItem(['coffee','oat milk','bananas']):",
  getLastItem(["coffee", "oat milk", "bananas"])
);
console.log(
  "getItemAt(['coffee','oat milk','bananas'], 1):",
  getItemAt(["coffee", "oat milk", "bananas"], 1)
);
console.log(
  "getItemAt(['coffee','oat milk','bananas'], 9):",
  getItemAt(["coffee", "oat milk", "bananas"], 9)
);

module.exports = { createGroceryList, getFirstItem, getLastItem, getItemAt };
