const { isOdd } = require("../lib");

test("1 is odd", () => {
  expect(isOdd(1)).toBe(true);
});

test("2 is not odd", () => {
  expect(isOdd(2)).toBe(false);
});
