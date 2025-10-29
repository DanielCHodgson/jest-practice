import { capitalize } from "./capitalize.js";

test("returns a string with the first character capitalized", () => {
  expect(capitalize("dog")).toBe("Dog");
});
