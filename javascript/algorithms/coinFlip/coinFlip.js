const assert = require("assert");

//recursion

const coinsRecursion = n => {
  let count = 0;

  const recur = n => {
    if (n <= 1) {
      return;
    }
    count++;
    return recur(n / 2);
  };

  recur(n);
  return count;
};

// no recrusion

const coinsNoRecursion = n => {
  let count = 0;

  while (n > 1) {
    n /= 2;
    count++;
  }
  return count;
};

// math class

const coinsMath = n => {
  return Math.ceil(Math.log(n) / Math.log(2));
};

assert.equal(coinsRecursion(412), 9);
assert.equal(coinsNoRecursion(412), 9);
assert.equal(coinsMath(412), 9);
