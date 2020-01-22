const assert = require('assert');

const smallestNumber = arr => {
    let smallest = Infinity;
    arr.forEach(num => {
        if (num < smallest) {
            smallest = num;
        }
    });
    return smallest;
};

const greatestCommonDenominator = arr => {
    let answer = 0;
    for (let i = smallestNumber(arr); i >= 1; i--) {
        if (isCommonDenominator(i, arr)) {
            answer = i;
            break;
        }
    }
    return answer;
};

const isCommonDenominator = (num, arr) => {
    if (arr.every(item => item % num === 0)) {
        return true;
    }
    return false;
};

assert.deepEqual(greatestCommonDenominator([42, 56, 14]), 14);
assert.deepEqual(greatestCommonDenominator([43, 51, 12]), 1);
console.log('All tests passed');