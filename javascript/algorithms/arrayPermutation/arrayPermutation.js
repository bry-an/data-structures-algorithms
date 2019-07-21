const assert = require("assert");

function permute(array, permutation) {
  let resultsArray = [];

  for (let i = 0; i < array.length; i++) {
    resultsArray[i] = array[permutation[i]];
  }
  return resultsArray;
}

assert.deepEqual(permute(["a", "b", "c"], [2, 1, 0]), ["c", "b", "a"]);
