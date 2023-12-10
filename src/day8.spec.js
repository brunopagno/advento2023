const { part1, part2 } = require("./day8");

describe("Day 8", () => {
  describe("part 1", () => {
    it("should validate test input", () => {
      const testInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

      expect(part1(testInput)).toEqual(2);
    });

    it("should validate test input for additional example", () => {
      const testInput = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

      expect(part1(testInput)).toEqual(6);
    });
  });

  describe("part 2", () => {
    it("should validate test input", () => {
      const testInput = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

      expect(part2(testInput)).toEqual(6);
    });
  });
});
