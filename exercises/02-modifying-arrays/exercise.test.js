const {
  updateSecondTask,
  addNewTask,
  finishLastTask,
  postponeFirstTask,
} = require("./exercise");

describe("updateSecondTask", () => {
  test("replaces the second task with the new one", () => {
    expect(
      updateSecondTask(["walk the dog", "buy groceries", "read a book"], "call mom")
    ).toEqual(["walk the dog", "call mom", "read a book"]);
  });
});

describe("addNewTask", () => {
  test("adds the new task to the end of the list", () => {
    expect(addNewTask(["walk the dog", "buy groceries"], "pick up dry cleaning")).toEqual([
      "walk the dog",
      "buy groceries",
      "pick up dry cleaning",
    ]);
  });

  test("works on an empty list", () => {
    expect(addNewTask([], "start the laundry")).toEqual(["start the laundry"]);
  });
});

describe("finishLastTask", () => {
  test("returns the finished task, not the whole list", () => {
    expect(finishLastTask(["walk the dog", "buy groceries"])).toBe("buy groceries");
    expect(finishLastTask(["submit the report"])).toBe("submit the report");
  });
});

describe("postponeFirstTask", () => {
  test("moves the first task to the end of the list", () => {
    expect(
      postponeFirstTask(["reply to emails", "walk the dog", "do laundry"])
    ).toEqual(["walk the dog", "do laundry", "reply to emails"]);
  });

  test("works with just two tasks", () => {
    expect(postponeFirstTask(["water the plants", "feed the cat"])).toEqual([
      "feed the cat",
      "water the plants",
    ]);
  });
});
