function part1(input) {
  const lines = input.split("\n");
  const commands = [...lines[0]];
  const nodes = lines.slice(2).map((line) => {
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

function part2(input) {}

module.exports = { part1, part2 };
