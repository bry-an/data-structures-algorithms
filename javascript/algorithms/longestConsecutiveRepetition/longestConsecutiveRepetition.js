const assert = require('assert');

// local max; global max; current letter
// iterate through string
// if next letter is same as current letter, local max++
// if local max > global max
// global max = local max and current letter


const longestRepetition = string => {
    if (string.length === 0) {
        return ["", 0]
    }
    const strArr = string.split('');
    let currentMax = 1;
    let globalMax = ["", 0];


    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] === strArr[i + 1]) {
            currentMax++;
            if (currentMax > globalMax[1]) {
                globalMax[1] = currentMax;
                globalMax[0] = strArr[i];
            }
        } else {
            currentMax = 1;
        }
    }
    return globalMax;
};

assert.deepEqual(longestRepetition("aaaabb"), ["a", 4]);
assert.deepEqual(longestRepetition("bbbaaabaaaa"), ["a", 4]);
assert.deepEqual(longestRepetition("cbdeuuu900"), ["u", 3]);
assert.deepEqual(longestRepetition("abbbbb"), ["b", 5]);
assert.deepEqual(longestRepetition("aabb"), ["a", 2]);
assert.deepEqual(longestRepetition(""), ["", 0]);