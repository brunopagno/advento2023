const fs = require("fs");

const day = process.argv[2];

if (!day) {
  console.error("usage npm run day <day>");
  process.exit(1);
}

const dayPath = `./day${day}.js`;
const inputPath = `./src/day${day}.input.txt`;
const { part1, part2 } = require(dayPath);
const input = fs.readFileSync(inputPath, "utf8");
console.log(`Day ${day}`);
console.log(`Part 1: "${part1(input)}"`);
console.log(`Part 2: "${part2(input)}"`);
