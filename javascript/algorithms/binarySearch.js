const binarySearch = (element, array) => {
  let left = 0;
  let right = array.length - 1;
  let pivot = Math.floor((right + left / 2));
  let count = 0

  while (array[pivot] !== element && left < right) {
    if (array[pivot] < element) {
      left = pivot + 1;
    }
    if (array[pivot] > element) {
      right = pivot - 1;
    }
    pivot = Math.floor(right + left / 2);
  }
  for (let i = 0; i < count; i++) {
      array.unshift(array.pop())
  }
  return array[pivot] == element ? pivot : -1;
};

console.log(binarySearch(4, [3, 4, 6, 8, 2]));
