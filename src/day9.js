function part1(input) {
  return input
    .split("\n")
    .map((line) => {
      const sequence = line.split(" ").map(Number);

      let next = sequence;
      let values = [];
      while (!next.every((v) => v === 0)) {
        values.push(next[next.length - 1]);
        next = next.map((v, i) => v - next[i - 1]).slice(1);
      }

      return values.reduce((a, b) => a + b, 0);
    })
    .reduce((a, b) => a + b, 0);
}

function part2(input) {}

module.exports = { part1, part2 };
