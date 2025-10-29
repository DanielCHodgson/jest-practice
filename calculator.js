export const calculator = {
  add: function (num1, num2) {
    this.validate(num1, num2);
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    this.validate(num1, num2);
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    this.validate(num1, num2);
    return num1 * num2;
  },

  divide: function (num1, num2) {
    this.validate(num1, num2);
    if (num2 === 0) {
      throw new Error("Error: Cannot divide by zero");
    }
    return num1 / num2;
  },

  validate(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Both inputs must be numbers");
    }
  },
};
