const assert = require('assert');

const createObjReduce = arr => {
    return arr.reduce((accum, curr) => {
        accum[curr] = accum[curr] ? accum[curr] + 1 : 1;
        return accum;
    }, {});
};
assert.deepEqual(createObjReduce([]), {});
assert.deepEqual(createObjReduce([1]), {1: 1});
assert.deepEqual(createObjReduce([1, 5, 7, 5, 2, 2, 7, 12, 3, 5]), { 1: 1, 5: 3, 7: 2, 2: 2, 12: 1, 3: 1});
console.log('All tests passed.');