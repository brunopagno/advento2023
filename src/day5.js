class Mapper {
  constructor(destination, source, range) {
    this.destination = destination;
    this.source = source;
    this.range = range;
  }

  fit(value) {
    return value >= this.source && value < this.source + this.range;
  }

  convert(value) {
    return this.destination + (value - this.source);
  }
}

function part1(input) {
  const seeds = [];
  const mapperSets = [];

  let currentMapper = null;
  const lines = input.split("\n").map((line) => {
    // skip empty lines
    if (line === "") {
      return;
    }

    if (line.startsWith("seeds:")) {
      const [_, ...seedValues] = line.split(":")[1].split(" ").map(Number);
      seeds.push(...seedValues);
    } else if (line.startsWith("seed-to-soil map:")) {
      currentMapper = 0;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("soil-to-fertilizer map:")) {
      currentMapper = 1;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("fertilizer-to-water map:")) {
      currentMapper = 2;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("water-to-light map:")) {
      currentMapper = 3;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("light-to-temperature map:")) {
      currentMapper = 4;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("temperature-to-humidity map:")) {
      currentMapper = 5;
      mapperSets[currentMapper] = [];
    } else if (line.startsWith("humidity-to-location map:")) {
      currentMapper = 6;
      mapperSets[currentMapper] = [];
    } else {
      const [destination, source, range] = line.split(" ").map(Number);
      const m = new Mapper(destination, source, range);
      mapperSets[currentMapper].push(m);
    }
  });

  const converted = seeds.map((seed) => {
    let value = seed;
    mapperSets.forEach((mapperSet) => {
      const mapperFound = mapperSet.find((mapper) => mapper.fit(value));
      if (mapperFound) {
        value = mapperFound.convert(value);
        return;
      }
    });
    return value;
  });

  return Math.min(...converted);
}

function part2(input) {}

module.exports = { part1, part2 };
