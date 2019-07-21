const assert = require("assert");

function longestUniqueSubarray(array) {
  const uniqueArray = new Set();
  let counter = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.has(array[i])) {
      uniqueArray.clear();
      counter = 0;
    }
    uniqueArray.add(array[i]);
    counter++;
    if (counter > max) {
      max = counter;
    }
  }
  return max;
}

assert.equal(longestUniqueSubarray([5, 1, 3, 5, 2, 3, 4, 1]), 5);
assert.equal(longestUniqueSubarray([2, 2, 2, 2, 2]), 1);
