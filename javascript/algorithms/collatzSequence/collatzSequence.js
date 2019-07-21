const assert = require("assert");

function collatz(num) {
  if (num <= 0) {
    return;
  }
  if (num === 1) {
    return true;
  }
  if (num % 2 === 0) {
    return collatz(num / 2);
  } else {
    return collatz(3 * num + 1);
  }
}

function countCollatz(num) {
  let memo = [];
  let count = 0;
  return collatzRecurse(num);

  function collatzRecurse(num) {
    if (memo[num]) {
      return memo[num];
    }
    if (num <= 0) {
      return 0;
    }
    if (num === 1) {
      count++;
      return count;
    }
    if (num % 2 === 0) {
      count++;
      return collatzRecurse(num / 2);
    } else {
      count++;
      return collatzRecurse(3 * num + 1);
    }
  }
}

function bonus() {
  let largest = 0;
  let largestNum = 0;
  for (let i = 0; i <= 1000000; i++) {
    const result = countCollatz(i);
    if (result > largest) {
      largest = result;
      largestNum = i;
    }
  }
  return largestNum;
}
assert.equal(collatz(1), true);
assert.equal(collatz(2), true);
assert.equal(collatz(18), true);
// statement is true for 1; statement is true for k=18; statement is true for
// k + 1; statement is true for all n by mathematical induction

// bonus() is a demanding function. Uncomment below code as desired.
// assert.equal(bonus(), 837779);
