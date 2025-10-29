import { capitalize } from "./capitalize.js";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("dog")).toBe("Dog");
  expect(capitalize("cat")).toBe("Cat");
});

test("throws error if input is not a string", () => {
  expect(() => capitalize(9)).toThrow("Expected a string");
  expect(() => capitalize({})).toThrow("Expected a string");
  expect(() => capitalize([])).toThrow("Expected a string");
});

test("returns empty string for falsy values", () => {
  expect(capitalize("")).toBe("");
  expect(capitalize(null)).toBe("");
  expect(capitalize(undefined)).toBe("");
});
