const {
  squareAll,
  keepEvens,
  upperCaseAll,
  squareEvens,
} = require("./exercise");

describe("squareAll", () => {
  test("squares every number", () => {
    expect(squareAll([1, 2, 3])).toEqual([1, 4, 9]);
  });

  test("does not modify the original array", () => {
    const input = [1, 2, 3];
    squareAll(input);
    expect(input).toEqual([1, 2, 3]);
  });
});

describe("keepEvens", () => {
  test("keeps only even numbers", () => {
    expect(keepEvens([1, 2, 3, 4])).toEqual([2, 4]);
  });

  test("returns an empty array when there are no evens", () => {
    expect(keepEvens([1, 3, 5])).toEqual([]);
  });
});

describe("upperCaseAll", () => {
  test("upper-cases every word", () => {
    expect(upperCaseAll(["a", "b", "cat"])).toEqual(["A", "B", "CAT"]);
  });
});

describe("squareEvens", () => {
  test("squares only the even numbers", () => {
    expect(squareEvens([1, 2, 3, 4])).toEqual([4, 16]);
  });

  test("returns an empty array when there are no evens", () => {
    expect(squareEvens([1, 3, 5])).toEqual([]);
  });
});
