import { reverseString } from "./capitalize.js";

test("reverses a regular string", () => {
  expect(reverseString("dog")).toBe("god");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses a string with special characters", () => {
  expect(reverseString("123!@#")).toBe("#@!321");
});

test("returns empty string if input is empty", () => {
  expect(reverseString("")).toBe("");
});

test("throws error if input is not a string", () => {
  expect(() => reverseString(9)).toThrow("Expected a string");
  expect(() => reverseString({})).toThrow("Expected a string");
  expect(() => reverseString([])).toThrow("Expected a string");
});
