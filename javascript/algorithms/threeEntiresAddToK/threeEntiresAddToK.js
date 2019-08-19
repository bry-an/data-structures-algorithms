const assert = require("assert");

// brute force! O(n)^3

const threeEntries = (arr, k) => {
  const filtered = arr.filter(item => item < k - 3);
  let result = false;

  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      for (let n = j + 1; n < filtered.length; n++) {
        if (filtered[i] + filtered[j] + filtered[n] === k) {
          result = true;
        }
      }
    }
  }
  return result;
};

assert.equal(threeEntries([20, 303, 3, 4, 25], 49), true);
assert.equal(threeEntries([20, 303, 3, 9, 25], 49), false);
