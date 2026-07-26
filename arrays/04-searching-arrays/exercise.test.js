const {
  hasItem,
  indexOfItem,
  findFirstEven,
  findFirstLongerThan,
} = require("./exercise");

describe("hasItem", () => {
  test("returns true when the value is present", () => {
    expect(hasItem(["a", "b", "c"], "b")).toBe(true);
  });

  test("returns false when the value is absent", () => {
    expect(hasItem(["a", "b", "c"], "z")).toBe(false);
  });
});

describe("indexOfItem", () => {
  test("returns the index of the value", () => {
    expect(indexOfItem(["a", "b", "c"], "c")).toBe(2);
  });

  test("returns -1 when the value is absent", () => {
    expect(indexOfItem(["a", "b", "c"], "z")).toBe(-1);
  });
});

describe("findFirstEven", () => {
  test("returns the first even number", () => {
    expect(findFirstEven([1, 3, 4, 7])).toBe(4);
  });

  test("returns undefined when there is no even number", () => {
    expect(findFirstEven([1, 3, 5])).toBeUndefined();
  });
});

describe("findFirstLongerThan", () => {
  test("returns the first word longer than the given length", () => {
    expect(findFirstLongerThan(["hi", "hello", "hey"], 3)).toBe("hello");
  });

  test("returns undefined when no word is long enough", () => {
    expect(findFirstLongerThan(["hi", "yo"], 5)).toBeUndefined();
  });
});
