const { part1, part2 } = require("./day1");

describe("Day 1", () => {
  describe("part 1", () => {
    const testInput = `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`;

    it("should validate test input", () => {
      expect(part1(testInput)).toEqual(142);
    });
  });

  describe("part 2", () => {
    const testInput = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`;

    it("should validate test input", () => {
      expect(part2(testInput)).toEqual(281);
    });
  });
});
