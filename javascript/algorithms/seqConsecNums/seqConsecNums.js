const assert = require('assert');

const sequenceOfConsecNums = arr => {
    if (arr.length === 1) {
        return 1;
    }
    arr.sort((a, b) => a - b);
    let longestSeqVal = 0;
    arr.forEach((num, i) => {
        let n = i;
        let currentSeqVal = 1;
        while (arr[n+1] - arr[n] === 1) {
            currentSeqVal++;
            n++;
        }
        if (currentSeqVal > longestSeqVal) {
            longestSeqVal = currentSeqVal;
        }
    });
    return longestSeqVal;
};

assert.deepEqual(sequenceOfConsecNums([5, 2, 99, 3, 4, 1, 100]), 5);
assert.deepEqual(sequenceOfConsecNums([1]), 1);
console.log('All tests passed!');