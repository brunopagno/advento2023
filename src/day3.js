function part1(input) {
  const lines = input.split("\n");

  return lines
    .map((line, lineNumber) =>
      Array.from(line.matchAll(/\d+/g)).map((match) => {
        const num = match[0];
        const x = match["index"];

        const left = line[x - 1];
        const right = line[x + num.length];
        if ((left && left !== ".") || (right && right !== ".")) {
          return num;
        }

        const previousLine = lines[lineNumber - 1];
        if (previousLine) {
          for (let i = x - 1; i < x + num.length + 1; i++) {
            const char = previousLine[i];
            if (char && char !== ".") {
              return num;
            }
          }
        }

        const nextLine = lines[lineNumber + 1];
        if (nextLine) {
          for (let i = x - 1; i < x + num.length + 1; i++) {
            const char = nextLine[i];
            if (char && char !== ".") {
              return num;
            }
          }
        }
        return 0;
      })
    )
    .flat()
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

function part2(input) {
  const lines = input.split("\n");

  return lines
    .map((line, lineNumber) =>
      Array.from(line.matchAll(/\*/g))
        .map((match) => {
          const nums = [
            Array.from(lines[lineNumber - 1].matchAll(/\d+/g)),
            Array.from(lines[lineNumber].matchAll(/\d+/g)),
            Array.from(lines[lineNumber + 1].matchAll(/\d+/g)),
          ]
            .flat()
            .filter(
              (num) =>
                num["index"] <= match["index"] + 1 &&
                num["index"] + num[0].length > match["index"] - 1
            );

          if (nums.length == 2) {
            return nums[0] * nums[1];
          }
          return 0;
        })
        .reduce((acc, curr) => acc + curr, 0)
    )
    .reduce((acc, curr) => acc + curr, 0);
}

module.exports = {
  part1,
  part2,
};
