const { part1, part2 } = require("./day6");

describe("Day 6", () => {
  const testInput = `Time:      7  15   30
Distance:  9  40  200`;

  describe("part 1", () => {
    it("should validate test input", () => {
      expect(part1(testInput)).toEqual(288);
    });
  });

  describe("part 2", () => {
    it("should validate test input", () => {
      expect(part2(testInput)).toEqual(71503);
    });
  });
});
