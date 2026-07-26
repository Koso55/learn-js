const {
  sortAscending,
  sortDescending,
  reverseArray,
  firstN,
  sortByLength,
} = require("./exercise");

describe("sortAscending", () => {
  test("sorts numbers smallest first", () => {
    expect(sortAscending([3, 1, 2])).toEqual([1, 2, 3]);
    expect(sortAscending([10, 1, 2])).toEqual([1, 2, 10]);
  });

  test("does not modify the original array", () => {
    const input = [3, 1, 2];
    sortAscending(input);
    expect(input).toEqual([3, 1, 2]);
  });
});

describe("sortDescending", () => {
  test("sorts numbers largest first", () => {
    expect(sortDescending([3, 1, 2])).toEqual([3, 2, 1]);
    expect(sortDescending([10, 1, 2])).toEqual([10, 2, 1]);
  });
});

describe("reverseArray", () => {
  test("reverses the order of items", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("does not modify the original array", () => {
    const input = [1, 2, 3];
    reverseArray(input);
    expect(input).toEqual([1, 2, 3]);
  });
});

describe("firstN", () => {
  test("returns the first n items", () => {
    expect(firstN(["a", "b", "c"], 2)).toEqual(["a", "b"]);
    expect(firstN([1, 2, 3, 4], 0)).toEqual([]);
  });
});

describe("sortByLength", () => {
  test("sorts words shortest first", () => {
    expect(sortByLength(["ccc", "a", "bb"])).toEqual(["a", "bb", "ccc"]);
  });
});
