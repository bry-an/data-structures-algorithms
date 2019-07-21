const assert = require("assert");

// answer to follow-up not using multiplication

const multiplyAllNotMe = items =>
  items.map((item, index) => {
    const [...itemsCopy] = items;
    itemsCopy.splice(index, 1);
    return itemsCopy.reduce((a, b) => a * b, 1);
  });

assert.deepEqual(multiplyAllNotMe([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
