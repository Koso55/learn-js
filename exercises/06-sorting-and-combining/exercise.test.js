const {
  sortRaceTimesFastestFirst,
  rankScoresHighestFirst,
  reverseRoadTripItinerary,
  getTopFinishers,
  sortPlayersByNameLength,
} = require("./exercise");

describe("sortRaceTimesFastestFirst", () => {
  test("sorts times smallest (fastest) first", () => {
    expect(sortRaceTimesFastestFirst([58.2, 61.0, 55.9])).toEqual([55.9, 58.2, 61.0]);
  });

  test("does not modify the original array", () => {
    const times = [58.2, 61.0, 55.9];
    sortRaceTimesFastestFirst(times);
    expect(times).toEqual([58.2, 61.0, 55.9]);
  });
});

describe("rankScoresHighestFirst", () => {
  test("sorts scores largest first", () => {
    expect(rankScoresHighestFirst([1200, 950, 1875])).toEqual([1875, 1200, 950]);
  });
});

describe("reverseRoadTripItinerary", () => {
  test("reverses the order of the stops", () => {
    expect(reverseRoadTripItinerary(["Denver", "Boulder", "Aspen"])).toEqual([
      "Aspen",
      "Boulder",
      "Denver",
    ]);
  });

  test("does not modify the original itinerary", () => {
    const stops = ["Denver", "Boulder", "Aspen"];
    reverseRoadTripItinerary(stops);
    expect(stops).toEqual(["Denver", "Boulder", "Aspen"]);
  });
});

describe("getTopFinishers", () => {
  test("returns the top n names", () => {
    expect(getTopFinishers(["Amara", "Ben", "Chidi", "Dana"], 2)).toEqual([
      "Amara",
      "Ben",
    ]);
  });

  test("returns an empty array when n is 0", () => {
    expect(getTopFinishers(["Amara", "Ben"], 0)).toEqual([]);
  });
});

describe("sortPlayersByNameLength", () => {
  test("sorts names shortest first", () => {
    expect(sortPlayersByNameLength(["Christopher", "Al", "Marisol"])).toEqual([
      "Al",
      "Marisol",
      "Christopher",
    ]);
  });
});
