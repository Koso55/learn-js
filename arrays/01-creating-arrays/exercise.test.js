const {
  createNumbersArray,
  getFirstItem,
  getLastItem,
  getItemAt,
} = require("./exercise");

describe("createNumbersArray", () => {
  test("returns [10, 20, 30]", () => {
    expect(createNumbersArray()).toEqual([10, 20, 30]);
  });
});

describe("getFirstItem", () => {
  test("returns the item at index 0", () => {
    expect(getFirstItem(["a", "b", "c"])).toBe("a");
    expect(getFirstItem([42, 1, 2])).toBe(42);
  });
});

describe("getLastItem", () => {
  test("returns the last item for arrays of different lengths", () => {
    expect(getLastItem(["a", "b", "c"])).toBe("c");
    expect(getLastItem([1, 2])).toBe(2);
    expect(getLastItem([99])).toBe(99);
  });
});

describe("getItemAt", () => {
  test("returns the item at a valid index", () => {
    expect(getItemAt(["a", "b", "c"], 0)).toBe("a");
    expect(getItemAt(["a", "b", "c"], 2)).toBe("c");
  });

  test("returns 'out of range' for an index that's too big", () => {
    expect(getItemAt(["a", "b", "c"], 9)).toBe("out of range");
  });

  test("returns 'out of range' for a negative index", () => {
    expect(getItemAt(["a", "b", "c"], -1)).toBe("out of range");
  });
});
