const fs = require("fs");

/**
 *
 * @param {string} input
 * @returns {number}
 */
function part1(input) {
  const result = input
    .split("\n")
    .map((line) => {
      const r = line.match(/(\d)/g);
      return r[0] + r[r.length - 1];
    })
    .map((entry) => parseInt(entry))
    .reduce((a, b) => a + b, 0);

  return result;
}

/**
 * @param {string} input
 * @returns {number}
 */
function part2(input) {
  const spelledDigits = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const parseIfText = (value) => {
    const parsed = spelledDigits[value];
    if (parsed) {
      return parsed;
    }
    return value;
  };

  const result = input
    .split("\n")
    .map((line) => {
      const matches = line.matchAll(
        /(?=((\d)|one|two|three|four|five|six|seven|eight|nine))/g
      );
      const r = Array.from(matches).map((m) => m[1]);

      return parseIfText(r[0]) + parseIfText(r[r.length - 1]);
    })
    .map((entry) => parseInt(entry))
    .reduce((a, b) => a + b, 0);

  return result;
}

module.exports = {
  part1,
  part2,
};
