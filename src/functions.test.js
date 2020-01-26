import { doTimes, formatDecimal } from "./functions";

test("formatDecimal", () => {
  expect(formatDecimal(1.23456)).toEqual("1.23");
  expect(formatDecimal(1)).toEqual("1.00");
});

test("doTimes", () => {
  let zero = 0;
  let one = 0;
  let five = 0;

  doTimes(0, () => zero++);
  doTimes(1, () => one++);
  doTimes(5, () => five++);

  expect(zero).toBe(0);
  expect(one).toBe(1);
  expect(five).toBe(5);
});
