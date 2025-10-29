export function analyzeArray(array) {
  if (array.length <= 0) {
    throw new Error("Array must not be empty");
  }
  if (!array.every((element) => typeof element === "number")) {
    throw new Error("Array must contain only numbers");
  }

  const length = array.length;
  const average = roundIfDecimal(array.reduce((a, b) => a + b) / length);
  const min = array.reduce((a, b) => (a < b ? a : b));
  const max = array.reduce((a, b) => (a > b ? a : b));

  function roundIfDecimal(num) {
    return Number.isInteger(num) ? num : Number(num.toFixed(2));
  }

  return {
    length,
    average,
    min,
    max,
  };
}
