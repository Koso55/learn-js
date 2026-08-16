const {
  createGroceryList,
  getFirstItem,
  getLastItem,
  getItemAt,
} = require("./exercise");

describe("createGroceryList", () => {
  test("returns milk, eggs, and bread in that order", () => {
    expect(createGroceryList()).toEqual(["milk", "eggs", "bread"]);
  });
});

describe("getFirstItem", () => {
  test("returns the first item on the list", () => {
    expect(getFirstItem(["coffee", "oat milk", "bananas"])).toBe("coffee");
    expect(getFirstItem(["dish soap"])).toBe("dish soap");
  });
});

describe("getLastItem", () => {
  test("returns the last item, whatever the list's length", () => {
    expect(getLastItem(["coffee", "oat milk", "bananas"])).toBe("bananas");
    expect(getLastItem(["paper towels", "sponges"])).toBe("sponges");
    expect(getLastItem(["batteries"])).toBe("batteries");
  });
});

describe("getItemAt", () => {
  test("returns the item at a valid position", () => {
    const list = ["coffee", "oat milk", "bananas"];
    expect(getItemAt(list, 0)).toBe("coffee");
    expect(getItemAt(list, 2)).toBe("bananas");
  });

  test("returns 'nothing there' for a position beyond the list", () => {
    expect(getItemAt(["coffee", "oat milk", "bananas"], 9)).toBe(
      "nothing there"
    );
  });

  test("returns 'nothing there' for a negative position", () => {
    expect(getItemAt(["coffee", "oat milk", "bananas"], -1)).toBe(
      "nothing there"
    );
  });
});
