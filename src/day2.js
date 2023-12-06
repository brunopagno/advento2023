function part1(input) {
  const RED_LIMIT = 12;
  const GREEN_LIMIT = 13;
  const BLUE_LIMIT = 14;

  return input
    .split("\n")
    .map((line) => {
      const [head, tail] = line.split(":");
      const id = head.match(/\d+/)[0];
      const overTheLimit = tail
        .split(";")
        .join(",")
        .split(",")
        .map((group) => group.trim())
        .some((item) => {
          let [count, color] = item.split(" ");
          count = parseInt(count);
          switch (color) {
            case "red":
              return count > RED_LIMIT;
            case "green":
              return count > GREEN_LIMIT;
            case "blue":
              return count > BLUE_LIMIT;
          }
        });

      if (overTheLimit) {
        return 0;
      }
      return parseInt(id);
    })
    .reduce((a, c) => a + c, 0);
}

function part2(input) {
  return input
    .split("\n")
    .map((line) => {
      const [_head, tail] = line.split(":");

      const result = tail
        .split(";")
        .join(",")
        .split(",")
        .map((entry) => entry.trim())
        .reduce((groups, entry) => {
          let [count, color] = entry.split(" ");
          count = parseInt(count);
          if (!groups[color]) {
            groups[color] = count;
          } else if (groups[color] < count) {
            groups[color] = count;
          }
          return groups;
        }, {});

      return Object.values(result).reduce((a, c) => a * c, 1);
    })
    .reduce((a, c) => a + c, 0);
}

module.exports = {
  part1,
  part2,
};
