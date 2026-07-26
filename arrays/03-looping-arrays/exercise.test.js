const {
  sumArray,
  countGreaterThan,
  joinWithDash,
  doubleAll,
} = require("./exercise");

describe("sumArray", () => {
  test("adds up all the numbers", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
    expect(sumArray([5])).toBe(5);
  });
});

describe("countGreaterThan", () => {
  test("counts items above the threshold", () => {
    expect(countGreaterThan([1, 5, 10], 4)).toBe(2);
    expect(countGreaterThan([1, 2, 3], 10)).toBe(0);
  });
});

describe("joinWithDash", () => {
  test("joins words with a dash", () => {
    expect(joinWithDash(["a", "b", "c"])).toBe("a-b-c");
    expect(joinWithDash(["only"])).toBe("only");
  });
});

describe("doubleAll", () => {
  test("returns a new array with every number doubled", () => {
    const input = [1, 2, 3];
    expect(doubleAll(input)).toEqual([2, 4, 6]);
    expect(input).toEqual([1, 2, 3]); // original untouched
  });
});
