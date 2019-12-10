
const assert = require('assert');

const charFrequency = string => {
    const frequencies = new Map();


    string.split('').forEach(item => {
        let charFrequency = frequencies.get(item);
        if (charFrequency) {
            frequencies.set(item, ++charFrequency);
        } else {
            frequencies.set(item, 1);
        }
    });
    // first sort string alphabetically to cluster same letters together, then sort based on frequency
    return string.split('').sort().sort((a, b) => frequencies.get(b) - frequencies.get(a)).join('');
};

assert.deepEqual(charFrequency('tweet'), 'eettw');
console.log('All tests passed!');