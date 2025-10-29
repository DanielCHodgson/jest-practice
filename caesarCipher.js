export function caesarCipher(string, shiftFactor) {
  if (typeof string !== "string") throw new Error("Expected string");
  if (typeof shiftFactor !== "number") throw new Error("Expected number");

  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char >= "a" && char <= "z") {
      result += shiftChar(char, "a".charCodeAt(0), "z".charCodeAt(0));
    } else if (char >= "A" && char <= "Z") {
      result += shiftChar(char, "A".charCodeAt(0), "Z".charCodeAt(0));
    } else {
      result += char;
    }
  }

  function shiftChar(char, startCharCode, endCharCode) {
    let newCharCode = char.charCodeAt(0) + shiftFactor;

    if (newCharCode > endCharCode) {
      newCharCode -= 26;
    }
    if (newCharCode < startCharCode) {
      newCharCode += 26;
    }

    return String.fromCharCode(newCharCode);
  }

  return result;
}
