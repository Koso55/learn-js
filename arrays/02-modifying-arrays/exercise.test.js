const {
  changeSecondItem,
  addToEnd,
  removeFromEnd,
  moveFirstToLast,
} = require("./exercise");

describe("changeSecondItem", () => {
  test("sets index 1 to the new value", () => {
    expect(changeSecondItem([1, 2, 3], 99)).toEqual([1, 99, 3]);
    expect(changeSecondItem(["a", "b"], "z")).toEqual(["a", "z"]);
  });
});

describe("addToEnd", () => {
  test("pushes the value onto the end", () => {
    expect(addToEnd([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    expect(addToEnd([], "first")).toEqual(["first"]);
  });
});

describe("removeFromEnd", () => {
  test("returns the removed value, not the array", () => {
    expect(removeFromEnd([1, 2, 3])).toBe(3);
    expect(removeFromEnd(["a", "b"])).toBe("b");
  });
});

describe("moveFirstToLast", () => {
  test("moves the first item to the end", () => {
    expect(moveFirstToLast([1, 2, 3])).toEqual([2, 3, 1]);
    expect(moveFirstToLast(["a", "b", "c", "d"])).toEqual(["b", "c", "d", "a"]);
  });
});
