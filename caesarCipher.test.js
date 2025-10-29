import { caesarCipher } from "./caesarCipher";

test("Shifts lowercase letters", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

test("Shifts uppercase letters", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Works with mixed case", () => {
  expect(caesarCipher("AbC xYz", 2)).toBe("CdE zAb");
});

test("Negative shifts", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
  expect(caesarCipher("ABC", -2)).toBe("YZA");
});

test("Preserves special characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});


test("shift of 0 returns the same string", () => {
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
});
