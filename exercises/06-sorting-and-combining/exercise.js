// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.
// For every function here: do NOT modify the array that gets passed in.
// (Hint: start with arr.slice() to get a copy to work with.)

// 1) `times` holds each runner's finish time in seconds. Return a NEW array
//    with the times sorted fastest (smallest) first.
function sortRaceTimesFastestFirst(times) {
  // TODO: your code here
}

// 2) `scores` holds each player's score. Return a NEW array with the
//    scores sorted highest first, for the leaderboard.
function rankScoresHighestFirst(scores) {
  // TODO: your code here
}

// 3) `stops` is the road-trip itinerary, in the order you'll visit them.
//    Return a NEW array with the stops in reverse order, for the drive home.
function reverseRoadTripItinerary(stops) {
  // TODO: your code here
}

// 4) `rankedNames` is already sorted from 1st place to last place.
//    Return a NEW array with just the top `n` finishers.
function getTopFinishers(rankedNames, n) {
  // TODO: your code here
}

// 5) Team jerseys are sized by how long the player's name is. Return a NEW
//    array of `names` sorted shortest name first.
//    (Hint: strings have a .length too, just like arrays.)
function sortPlayersByNameLength(names) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log("sortRaceTimesFastestFirst([58.2, 61.0, 55.9]):", sortRaceTimesFastestFirst([58.2, 61.0, 55.9]));
console.log("rankScoresHighestFirst([1200, 950, 1875]):", rankScoresHighestFirst([1200, 950, 1875]));
console.log(
  "reverseRoadTripItinerary(['Denver','Boulder','Aspen']):",
  reverseRoadTripItinerary(["Denver", "Boulder", "Aspen"])
);
console.log(
  "getTopFinishers(['Amara','Ben','Chidi','Dana'], 2):",
  getTopFinishers(["Amara", "Ben", "Chidi", "Dana"], 2)
);
console.log(
  "sortPlayersByNameLength(['Christopher','Al','Marisol']):",
  sortPlayersByNameLength(["Christopher", "Al", "Marisol"])
);

module.exports = {
  sortRaceTimesFastestFirst,
  rankScoresHighestFirst,
  reverseRoadTripItinerary,
  getTopFinishers,
  sortPlayersByNameLength,
};
