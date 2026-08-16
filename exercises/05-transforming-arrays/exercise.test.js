const {
  calculateRoomAreas,
  getBedroomCandidates,
  shoutOutRoomNames,
  getBedroomAreas,
} = require("./exercise");

describe("calculateRoomAreas", () => {
  test("returns the area for each room", () => {
    expect(calculateRoomAreas([2, 3, 4])).toEqual([4, 9, 16]);
  });

  test("does not modify the original array", () => {
    const roomSides = [2, 3, 4];
    calculateRoomAreas(roomSides);
    expect(roomSides).toEqual([2, 3, 4]);
  });
});

describe("getBedroomCandidates", () => {
  test("keeps only rooms at least 3 meters on a side", () => {
    expect(getBedroomCandidates([2, 3, 4])).toEqual([3, 4]);
  });

  test("returns an empty array when no room qualifies", () => {
    expect(getBedroomCandidates([1, 2])).toEqual([]);
  });
});

describe("shoutOutRoomNames", () => {
  test("upper-cases every room name", () => {
    expect(shoutOutRoomNames(["kitchen", "office", "den"])).toEqual([
      "KITCHEN",
      "OFFICE",
      "DEN",
    ]);
  });
});

describe("getBedroomAreas", () => {
  test("returns the area of only the qualifying bedrooms", () => {
    expect(getBedroomAreas([2, 3, 4])).toEqual([9, 16]);
  });

  test("returns an empty array when nothing qualifies", () => {
    expect(getBedroomAreas([1, 2])).toEqual([]);
  });
});
