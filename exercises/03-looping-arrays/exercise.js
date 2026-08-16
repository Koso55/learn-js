// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) `expenses` holds how much you spent (in dollars) on each day of the
//    week. Return the total spent, using a for loop.
function totalWeeklySpending(expenses) {
  // TODO: your code here
}

// 2) Return how many days in `expenses` you spent MORE than `limit` dollars,
//    using a loop.
function countExpensiveDays(expenses, limit) {
  // TODO: your code here
}

// 3) `songs` is your road-trip playlist, in play order. Build and return a
//    single string joining every song with " -> " between them, using a
//    loop (don't use the built-in .join() method here).
//    Example: ["Intro", "Roadtrip Anthem"] -> "Intro -> Roadtrip Anthem"
function buildPlaylistLineup(songs) {
  // TODO: your code here
}

// 4) Next month your budget doubles for every day. Build and return a NEW
//    array where every value in `expenses` is doubled, using a loop.
//    Do not modify the original array.
function doubleNextMonthBudget(expenses) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("totalWeeklySpending([42, 15, 60, 20, 18, 75, 30]):", totalWeeklySpending([42, 15, 60, 20, 18, 75, 30]));
console.log("countExpensiveDays([42, 15, 60, 20, 18, 75, 30], 40):", countExpensiveDays([42, 15, 60, 20, 18, 75, 30], 40));
console.log(
  "buildPlaylistLineup(['Intro','Roadtrip Anthem','Sunset Drive']):",
  buildPlaylistLineup(["Intro", "Roadtrip Anthem", "Sunset Drive"])
);
console.log("doubleNextMonthBudget([42, 15, 60]):", doubleNextMonthBudget([42, 15, 60]));

module.exports = {
  totalWeeklySpending,
  countExpensiveDays,
  buildPlaylistLineup,
  doubleNextMonthBudget,
};
