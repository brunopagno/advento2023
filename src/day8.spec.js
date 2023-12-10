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

  // describe("part 2", () => {
  //   it("should validate test input", () => {
  //     expect(part2(testInput)).toEqual(0);
  //   });
  // });
});
