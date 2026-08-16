const {
  isGuestOnList,
  findGuestSeatNumber,
  findFirstFreezingDay,
  findFirstLongUsername,
} = require("./exercise");

describe("isGuestOnList", () => {
  test("returns true when the guest is on the list", () => {
    expect(isGuestOnList(["Maria", "Jon", "Priya"], "Jon")).toBe(true);
  });

  test("returns false when the guest is not on the list", () => {
    expect(isGuestOnList(["Maria", "Jon", "Priya"], "Alex")).toBe(false);
  });
});

describe("findGuestSeatNumber", () => {
  test("returns the guest's seat number", () => {
    expect(findGuestSeatNumber(["Maria", "Jon", "Priya"], "Priya")).toBe(2);
  });

  test("returns -1 for a guest who isn't coming", () => {
    expect(findGuestSeatNumber(["Maria", "Jon", "Priya"], "Alex")).toBe(-1);
  });
});

describe("findFirstFreezingDay", () => {
  test("returns the first temperature at or below freezing", () => {
    expect(findFirstFreezingDay([5, 2, -1, 3])).toBe(-1);
  });

  test("returns undefined when no day is that cold", () => {
    expect(findFirstFreezingDay([5, 12, 8])).toBeUndefined();
  });
});

describe("findFirstLongUsername", () => {
  test("returns the first username longer than maxLength", () => {
    expect(findFirstLongUsername(["sam", "moonlight_92", "kai"], 6)).toBe(
      "moonlight_92"
    );
  });

  test("returns undefined when every username is short enough", () => {
    expect(findFirstLongUsername(["sam", "kai", "jo"], 6)).toBeUndefined();
  });
});
