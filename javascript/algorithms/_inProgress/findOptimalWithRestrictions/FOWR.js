// Given a sorted list of integers of length N, determine if an element x is in the list without performing any multiplication, division, or bit-shift operations.


const assert = require('assert');

// get length
// pick a random number within length -1, split array at that pivot
// perform a binary search with the random index being the pivot

const find = (list, x) => {
    const sortedList = list.sort((a, b) => a - b);
    const recurse = (list, x) => {
        const random = Math.floor(Math.random() * list.length);
        const pivot = list[random];
        if (list.length > 1) {
            if (pivot < x) {
                return recurse(list.slice(random), x);
            } else if (pivot > x) {
                return recurse(list.slice(0, random), x);
            }
        }
        if (pivot === x) return true;
        return false;
    };
    return recurse(sortedList, x);
};






assert.deepStrictEqual(find([5, 3, 67, 56, 6, 12, 62], 3), true);
assert.deepStrictEqual(find([5, 3, 67, 56, 6, 12, 62], 52), false);
console.log('All tests passed!');
