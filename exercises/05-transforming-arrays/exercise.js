// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.
// You're mapping out rooms for a home renovation.

// 1) `roomSides` holds the side length (in meters) of each square room.
//    Return a new array with the AREA of each room (side * side).
//    Use .map(). Example: [2, 3] -> [4, 9]
function calculateRoomAreas(roomSides) {
  // TODO: your code here
}

// 2) A room only counts as a bedroom if its side is at least 3 meters.
//    Return a new array containing only the sides that qualify.
//    Use .filter(). Example: [2, 3, 4] -> [3, 4]
function getBedroomCandidates(roomSides) {
  // TODO: your code here
}

// 3) `roomNames` will go on the floor plan legend, which is always in
//    capital letters. Return a new array with every name upper-cased.
//    Use .map() and the string method .toUpperCase().
//    Example: ["kitchen", "office"] -> ["KITCHEN", "OFFICE"]
function shoutOutRoomNames(roomNames) {
  // TODO: your code here
}

// 4) Return the AREA of only the rooms big enough to be bedrooms
//    (side at least 3 meters). Use .filter() then .map().
//    Example: [2, 3, 4] -> [9, 16]
function getBedroomAreas(roomSides) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("calculateRoomAreas([2, 3, 4]):", calculateRoomAreas([2, 3, 4]));
console.log("getBedroomCandidates([2, 3, 4]):", getBedroomCandidates([2, 3, 4]));
console.log(
  "shoutOutRoomNames(['kitchen','office']):",
  shoutOutRoomNames(["kitchen", "office"])
);
console.log("getBedroomAreas([2, 3, 4]):", getBedroomAreas([2, 3, 4]));

module.exports = {
  calculateRoomAreas,
  getBedroomCandidates,
  shoutOutRoomNames,
  getBedroomAreas,
};
