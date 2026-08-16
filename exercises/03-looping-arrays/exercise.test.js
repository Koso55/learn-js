const {
  totalWeeklySpending,
  countExpensiveDays,
  buildPlaylistLineup,
  doubleNextMonthBudget,
} = require("./exercise");

describe("totalWeeklySpending", () => {
  test("adds up a full week of spending", () => {
    expect(totalWeeklySpending([42, 15, 60, 20, 18, 75, 30])).toBe(260);
  });

  test("returns 0 for a week with no spending", () => {
    expect(totalWeeklySpending([])).toBe(0);
  });
});

describe("countExpensiveDays", () => {
  test("counts the days over the daily limit", () => {
    expect(countExpensiveDays([42, 15, 60, 20, 18, 75, 30], 40)).toBe(3);
  });

  test("returns 0 when no day goes over the limit", () => {
    expect(countExpensiveDays([10, 20, 15], 50)).toBe(0);
  });
});

describe("buildPlaylistLineup", () => {
  test("joins the songs with arrows in play order", () => {
    expect(buildPlaylistLineup(["Intro", "Roadtrip Anthem", "Sunset Drive"])).toBe(
      "Intro -> Roadtrip Anthem -> Sunset Drive"
    );
  });

  test("returns just the song name for a single-song playlist", () => {
    expect(buildPlaylistLineup(["Solo Drive"])).toBe("Solo Drive");
  });
});

describe("doubleNextMonthBudget", () => {
  test("doubles every day's budget in a new array", () => {
    const thisMonth = [42, 15, 60];
    expect(doubleNextMonthBudget(thisMonth)).toEqual([84, 30, 120]);
    expect(thisMonth).toEqual([42, 15, 60]); // original untouched
  });
});
