const { part1, part2 } = require("./day9");

describe("Day 9", () => {
  const testInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

  describe("part 1", () => {
    it("should validate test input", () => {
      expect(part1(testInput)).toEqual(114);
    });
  });

  describe("part 2", () => {
    it("should validate test input", () => {
      expect(part2(testInput)).toEqual(2);
    });
  });
});
