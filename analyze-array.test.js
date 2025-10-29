import { analyzeArray } from "./analyze-array";

test("Checks array is not empty", () => {
  expect(() => analyzeArray([])).toThrow("Array must not be empty");
});
test("Checks array contains only numbers", () => {
  expect(() => analyzeArray([1, "a", 3])).toThrow(
    "Array must contain only numbers"
  );
});

test("Returns the length of the array", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("Returns the average of the numbers in the array", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8]).average).toBe(4.5);
});

test("Returns the average to max 2 decimal places", () => {
  expect(analyzeArray([1, 4, 5]).average).toBe(3.33);
});

test("Returns the smallest number in the array", () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

test("Returns the smallest number in the array", () => {
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});
