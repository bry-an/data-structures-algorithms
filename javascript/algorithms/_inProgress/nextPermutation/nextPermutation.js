const assert = require("assert");

function generatePermutations(arr) {
  let result = [];
  function permute(arr, m = []) {
    if (arr.length === 0) {
      result.push(parseInt(m.join("")));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }
  permute(arr);
  return result;
}

function nextPermutation(num) {
  const permutations = generatePermutations(num.toString().split(""));
  let smallest = permutations[0];

  for (let i = 0; i < permutations.length; i++) {
    if (permutations[i] > num && permutations[i] < smallest) {
      smallest = permutations[i];
    }
  }
  return smallest;
}

assert.equal(nextPermutation(48975), 49578);
