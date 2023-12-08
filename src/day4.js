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

function part2(input) {
  const lines = input.split("\n");

  const result = Array(lines.length).fill(1);

  lines.forEach((line) => {
    const [card, numbers] = line.split(":");
    const cardId = parseInt(card.match(/\d+/g)[0], 10);
    const [winning, mine] = numbers.split("|").map((n) => n.match(/\d+/g));

    const found = winning.filter((n) => mine.includes(n)).length;

    for (let i = 0; i < found; i++) {
      result[cardId + i] += result[cardId - 1];
    }
  });

  return result.reduce((a, b) => a + b, 0);
}

module.exports = {
  part1,
  part2,
};
