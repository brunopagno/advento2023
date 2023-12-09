class Mapper {
  constructor(destination, source, range) {
    this.destination = destination;
    this.source = source;
    this.range = range;
  }

  fit(value) {
    return value >= this.source && value < this.source + this.range;
  }

  retrofit(value) {
    return value >= this.destination && value < this.destination + this.range;
  }

  convert(value) {
    return this.destination + (value - this.source);
  }

  unconvert(value) {
    return this.source + (value - this.destination);
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

function part2(input) {
  const seedRanges = [];
  const mapperSets = [];

  let currentMapper = null;
  const lines = input.split("\n").map((line) => {
    // skip empty lines
    if (line === "") {
      return;
    }

    if (line.startsWith("seeds:")) {
      const [_, ...seedValues] = line.split(":")[1].split(" ").map(Number);
      for (let i = 0; i < seedValues.length; i += 2) {
        const seed = seedValues[i];
        const units = seedValues[i + 1];
        seedRanges.push([seed, seed + units]);
      }
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

  const reverseCopyOfMapperSets = mapperSets.slice().reverse();
  let result = -1;
  for (let i = 0; i < 100_000_000; i++) {
    let value = i;

    for (let mapperSet of reverseCopyOfMapperSets) {
      const mapperFound = mapperSet.find((mapper) => mapper.retrofit(value));

      if (mapperFound) {
        value = mapperFound.unconvert(value);
      }
    }

    if (
      seedRanges.find(
        (seedRange) => value >= seedRange[0] && value < seedRange[1]
      )
    ) {
      result = value;
      break;
    }
  }

  let vvv = result;
  mapperSets.forEach((mapperSet) => {
    const mapperFound = mapperSet.find((mapper) => mapper.fit(vvv));
    if (mapperFound) {
      vvv = mapperFound.convert(vvv);
      return;
    }
  });

  return vvv;
}

module.exports = { part1, part2 };
