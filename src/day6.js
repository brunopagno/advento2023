function part1(input) {
  const lines = input.split("\n");
  const times = lines[0].match(/\d+/g).map(Number);
  const distances = lines[1].match(/\d+/g).map(Number);
  const races = times.map((time, i) => ({
    time,
    distance: distances[i],
  }));

  const result = races
    .map(({ time, distance }) => {
      let wins = 0;
      for (let i = 1; i < time; i++) {
        if (i * (time - i) > distance) {
          wins += 1;
        }
      }
      return wins;
    })
    .reduce((a, b) => a * b, 1);

  return result;
}

function part2(input) {
  const lines = input.split("\n");
  const time = parseInt(lines[0].split(":")[1].split(" ").join(""), 10);
  const distance = parseInt(lines[1].split(":")[1].split(" ").join(""), 10);

  let wins = 0;
  for (let i = 1; i < time; i++) {
    if (i * (time - i) > distance) {
      wins += 1;
    }
  }
  return wins;
}

module.exports = { part1, part2 };
