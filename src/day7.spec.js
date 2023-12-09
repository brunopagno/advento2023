const { part1, part2 } = require("./day7");

describe("Day 7", () => {
  const testInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

  describe("part 1", () => {
    it("should validate test input", () => {
      expect(part1(testInput)).toEqual(6440);
    });
  });

  describe("part 2", () => {
    it("should validate test input", () => {
      expect(part2(testInput)).toEqual(0);
    });
  });
});
