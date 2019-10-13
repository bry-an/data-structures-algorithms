const assert = require("assert");

// brute force! O(n)^3
// TODO: make this function not suck

const threeEntries = (arr, k) => {
  const filtered = arr.filter(item => item < k - 3);
  // k - 3 b/c with 3 non-repeating numbers summing to k, two others could be at smallest 1 & 2, leaving k-3 as largest possible for third

  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      for (let n = j + 1; n < filtered.length; n++) {
        if (filtered[i] + filtered[j] + filtered[n] === k) {
          return true;
        }
      }
    }
  }
  return false;
};

assert.equal(threeEntries([20, 303, 3, 4, 25], 49), true);
assert.equal(threeEntries([20, 303, 3, 9, 25], 49), false);
