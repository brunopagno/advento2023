/*
  5 of a kind =>    7
  4 of a kind =>    6
  full house =>     5
  3 of a kind =>    4
  2 pair =>         3
  1 pair =>         2
  high card =>      1
*/

function part1(input) {
  const cardPower = {
    A: 14,
    K: 13,
    Q: 12,
    J: 11,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
  };

  const deals = input
    .split("\n")
    .map((line) => {
      const [hand, bid] = line.split(" ");

      const cards = {};
      [...hand].forEach((card) => {
        if (!cards[card]) {
          cards[card] = 0;
        }
        cards[card] += 1;
      });

      const cardCounts = Object.values(cards).sort((a, b) => b - a);

      let power;
      if (cardCounts[0] === 5) {
        power = 7;
      } else if (cardCounts[0] === 4) {
        power = 6;
      } else if (cardCounts[0] === 3 && cardCounts[1] === 2) {
        power = 5;
      } else if (cardCounts[0] === 3) {
        power = 4;
      } else if (cardCounts[0] === 2 && cardCounts[1] === 2) {
        power = 3;
      } else if (cardCounts[0] === 2) {
        power = 2;
      } else {
        power = 1;
      }

      return {
        hand,
        bid: parseInt(bid),
        power,
      };
    })
    .sort((a, b) => {
      if (a.power === b.power) {
        for (let i = 0; i < a.hand.length; i++) {
          if (cardPower[a.hand[i]] !== cardPower[b.hand[i]]) {
            return cardPower[b.hand[i]] - cardPower[a.hand[i]];
          }
        }
      }
      return b.power - a.power;
    })
    .reverse()
    .map((deal, index) => [deal.bid, index + 1])
    .reduce((a, c) => (a += c[0] * c[1]), 0);

  return deals;
}

function part2(input) {
  const cardPower = {
    A: 14,
    K: 13,
    Q: 12,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    J: 1,
  };

  const deals = input
    .split("\n")
    .map((line) => {
      const [hand, bid] = line.split(" ");

      const cards = {};
      [...hand].forEach((card) => {
        if (card === "J") return;

        if (!cards[card]) {
          cards[card] = 0;
        }
        cards[card] += 1;
      });

      const cardCounts = Object.values(cards).sort((a, b) => b - a);
      if (!cardCounts[0]) {
        cardCounts[0] = 0;
      }
      cardCounts[0] += hand.split("J").length - 1;

      let power;
      if (cardCounts[0] === 5) {
        power = 7;
      } else if (cardCounts[0] === 4) {
        power = 6;
      } else if (cardCounts[0] === 3 && cardCounts[1] === 2) {
        power = 5;
      } else if (cardCounts[0] === 3) {
        power = 4;
      } else if (cardCounts[0] === 2 && cardCounts[1] === 2) {
        power = 3;
      } else if (cardCounts[0] === 2) {
        power = 2;
      } else {
        power = 1;
      }

      return {
        hand,
        bid: parseInt(bid),
        power,
      };
    })
    .sort((a, b) => {
      if (a.power === b.power) {
        for (let i = 0; i < a.hand.length; i++) {
          if (cardPower[a.hand[i]] !== cardPower[b.hand[i]]) {
            return cardPower[b.hand[i]] - cardPower[a.hand[i]];
          }
        }
      }
      return b.power - a.power;
    })
    .reverse()
    .map((deal, index) => [deal.bid, index + 1])
    .reduce((a, c) => (a += c[0] * c[1]), 0);

  return deals;
}

module.exports = { part1, part2 };
