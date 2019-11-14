const assert = require("assert");

const greedIsGood = arr => {
  const freq = new Array(7).fill(0);
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i] + 1]++;
  }

  freq
  for (let j = 1; j < freq.length -1; j++) {
    if (freq[j] >= 3) {
      if (j === 1) {
        score += 1000;
      } else {
        score += (j + 1) * 1000;
      }
      freq[j] = freq[j] - 3;
    } else {
      if (j === 5) {
        score += freq[j] * 50;
      } else if (j === 1) {
        score += freq[j] * 100;
      }
    }
    return score;
  }
};

greedIsGood([5, 1, 3, 4, 1]); //?
assert(greedIsGood([5, 1, 3, 4, 1]), 250);
assert(greedIsGood([1, 1, 1, 3, 1]), 1100);
assert(greedIsGood([2, 4, 4, 5, 4]), 450);
