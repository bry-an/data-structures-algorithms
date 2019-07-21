const assert = require("assert");

function getHIndex(arr) {
  const sorted = arr.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted.length - i <= arr[i]) {
      return arr[i];
    }
  }
}

assert.equal(getHIndex([4, 3, 0, 1, 5]), 3);
