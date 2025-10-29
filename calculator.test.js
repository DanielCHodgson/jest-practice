import { calculator } from "./calculator";

test("Returns the sum of two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(-1, -1)).toBe(-2);
});

test("returns the difference of two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(-5, -5)).toBe(0);
  expect(calculator.subtract(0, 10)).toBe(-10);
});

test("returns the product of two numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(0, 9)).toBe(0);
  expect(calculator.multiply(1.5, 2)).toBe(3);
});

test("returns the quotient of two numbers", () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(-6, 3)).toBe(-2);
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("throws error when dividing by zero", () => {
  expect(() => calculator.divide(5, 0)).toThrow("Error: Cannot divide by zero");
});

test("throws error if inputs are not numbers", () => {
  expect(() => calculator.add("1", 2)).toThrow("Both inputs must be numbers");
  expect(() => calculator.subtract(2, "x")).toThrow(
    "Both inputs must be numbers"
  );
  expect(() => calculator.multiply(null, 5)).toThrow(
    "Both inputs must be numbers"
  );
  expect(() => calculator.divide([], {})).toThrow(
    "Both inputs must be numbers"
  );
});
