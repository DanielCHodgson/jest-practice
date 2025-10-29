export function capitalize(input) {
  if (!input) return "";
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  return input[0].toUpperCase() + input.slice(1);
}
