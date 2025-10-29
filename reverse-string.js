export function reverseString(input) {
  if (!input) return "";
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  return input.split('').reverse().join('');
}
