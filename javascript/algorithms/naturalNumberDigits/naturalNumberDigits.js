const assert = require('assert');

const countDigits = (num, count = 0) => {
    if (!num.toString()) {
        return count;
    }
    if (num.toString()[0] === '.' || num.toString()[0] === '-') {
        return countDigits(num.toString().slice(1), count);
    }
    return countDigits(num.toString().slice(1), ++count);
};

assert.equal(countDigits(1), 1);
assert.equal(countDigits(0), 1);
assert.equal(countDigits(1.2965), 5);
assert.equal(countDigits(-1.2965), 5);
