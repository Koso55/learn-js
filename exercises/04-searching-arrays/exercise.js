// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) `guestList` is the RSVP list for a party. Return true if `name` is on
//    it, false otherwise.
function isGuestOnList(guestList, name) {
  // TODO: your code here
}

// 2) Guests are seated in the order they appear on `guestList` (first name
//    on the list gets seat 0, and so on). Return `name`'s seat number,
//    or -1 if they aren't on the list.
function findGuestSeatNumber(guestList, name) {
  // TODO: your code here
}

// 3) `temperatures` holds this week's daily temperatures in Celsius.
//    Return the first temperature that is at or below freezing (0),
//    using .find(). Return undefined if no day was that cold.
function findFirstFreezingDay(temperatures) {
  // TODO: your code here
}

// 4) Return the first username in `usernames` that is longer than
//    `maxLength` characters, using .find(). Return undefined if none is.
function findFirstLongUsername(usernames, maxLength) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log(
  "isGuestOnList(['Maria','Jon','Priya'], 'Jon'):",
  isGuestOnList(["Maria", "Jon", "Priya"], "Jon")
);
console.log(
  "findGuestSeatNumber(['Maria','Jon','Priya'], 'Priya'):",
  findGuestSeatNumber(["Maria", "Jon", "Priya"], "Priya")
);
console.log(
  "findFirstFreezingDay([5, 2, -1, 3]):",
  findFirstFreezingDay([5, 2, -1, 3])
);
console.log(
  "findFirstLongUsername(['sam','moonlight_92','kai'], 6):",
  findFirstLongUsername(["sam", "moonlight_92", "kai"], 6)
);

module.exports = {
  isGuestOnList,
  findGuestSeatNumber,
  findFirstFreezingDay,
  findFirstLongUsername,
};
