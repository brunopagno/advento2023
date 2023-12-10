function setupNodes(nodeLines) {
  const nodes = nodeLines.map((line) => {
    const [name, left, right] = line.match(/\w\w\w/g);
    return {
      name,
      left,
      right,
    };
  });

  nodes.forEach((node) => {
    node.left = nodes.find((n) => n.name === node.left);
    node.right = nodes.find((n) => n.name === node.right);
  });

  return nodes;
}

function part1(input) {
  const lines = input.split("\n");
  const commands = [...lines[0]];
  const nodes = setupNodes(lines.slice(2));

  let steps = 0;
  let currentNode = nodes.find((n) => n.name === "AAA");
  while (currentNode.name != "ZZZ") {
    const command = commands[steps % commands.length];

    switch (command) {
      case "L":
        currentNode = currentNode.left;
        break;
      case "R":
        currentNode = currentNode.right;
        break;
    }

    steps += 1;
  }

  return steps;
}

function part2(input) {
  const lines = input.split("\n");
  const commands = [...lines[0]];
  const nodes = setupNodes(lines.slice(2));

  let currentNodes = nodes.filter((n) => n.name[2] === "A");

  const stepsForThemAll = currentNodes.map((currentNode) => {
    let steps = 0;

    while (currentNode.name[2] != "Z") {
      const command = commands[steps % commands.length];

      switch (command) {
        case "L":
          currentNode = currentNode.left;
          break;
        case "R":
          currentNode = currentNode.right;
          break;
      }

      steps += 1;
    }

    return steps;
  });

  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  function lcmOfList(numbers) {
    return numbers.reduce(lcm);
  }

  return lcmOfList(stepsForThemAll);
}

module.exports = { part1, part2 };
