function part1(input) {
  return input
    .split("\n")
    .map((line) => {
      const [winning, mine] = line
        .split(":")[1]
        .split("|")
        .map((n) => n.match(/\d+/g));

      const found = winning.filter((n) => mine.includes(n));

      if (found.length === 0) return 0;
      return 2 ** (found.length - 1);
    })
    .reduce((a, b) => a + b, 0);
}

function part2(input) {}

module.exports = {
  part1,
  part2,
};
