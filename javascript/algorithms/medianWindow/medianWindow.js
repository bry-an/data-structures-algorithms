const assert = require('assert');

const median = arr => {
    const sorted = [...arr].sort((a, b) => a - b );
    const len = arr.length;
    let median = 0;
    if (len %2 !== 0) {
        const middle = Math.floor(len / 2);
        median = sorted[middle];
    } else {
        const middle = len / 2;
        median = ((sorted[middle - 1] + sorted[middle]) / 2);
    }
    return median;
};

const medianWindow = (arr, k, test = false) => {
    if (arr.length < k) {
        return null;
    }
    let returnString = '';
    const testArray = [];
    arr.forEach((number, i) => {
        if (i + k <= arr.length) {
            const subset = arr.slice(i, i+k);
            if (!test) {
                returnString += `${median(subset)} <- median of ${subset} \n`;
            } else {
                testArray[i] = [median(subset), ...subset];
            }
        }
    });
    return returnString || testArray;
};

// run function with desired string output
console.log(medianWindow([-1, 5, 13, 8, 2, 3, 3, 1], 3));

// run function with test parameter for testable output, should return nested arrays of [median, ...set]
// k = 3
const test1 = medianWindow([-1, 5, 13, 8, 2, 3, 3, 1], 3, true);
// k = 4
const test2 = medianWindow([-1, 5, 13, 8, 2, 3, 3, 1], 4, true);

assert.deepEqual(test1, [[5, -1, 5, 13], [8, 5, 13, 8], [8, 13, 8, 2], [3, 8, 2, 3], [3, 2, 3, 3], [3, 3, 3, 1]]);
assert.deepEqual(test2, [[6.5, -1, 5, 13, 8], [6.5, 5, 13, 8, 2], [5.5, 13, 8, 2, 3], [3, 8, 2, 3, 3], [2.5, 2, 3, 3, 1]]);

console.log('Tests pass!');
