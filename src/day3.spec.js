const { part1, part2 } = require("./day3");

describe("Day 3", () => {
  describe("part 1", () => {
    const testInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

    it("should validate test input", () => {
      expect(part1(testInput)).toEqual(4361);
    });
  });

  describe("part 2", () => {
    const testInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

    it("should validate test input", () => {
      expect(part2(testInput)).toEqual(467835);
    });
  });
});
