const assert = require("assert");

const binarySearch = (element, array) => {
  let left = 0;
  let right = array.length - 1;
  let pivot = Math.floor(right + left / 2);
  let count = 0;

  while (array[pivot] !== element && left < right) {
    if (array[pivot] < element) {
      left = pivot + 1;
    }
    if (array[pivot] > element) {
      right = pivot - 1;
    }
    pivot = Math.floor(right + left / 2);
  }
  return array[pivot] === element ? pivot : -1;
};

assert.equal(binarySearch(4, [2, 3, 4, 5, 8]), 2);
assert.equal(binarySearch(4, [2, 3, 5, 8]), -1);
