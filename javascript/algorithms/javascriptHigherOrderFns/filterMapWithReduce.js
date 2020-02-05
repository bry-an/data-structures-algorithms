// reimplement map() and filter() using reduce
const assert = require('assert');

const filter = ((predicate, array) => {
    return array.reduce((accum, curr) => {
        if (predicate(curr)) {
            accum.push(curr);
        }
        return accum;
    },[]);
});

const map = ((callback, array) => {
    return array.reduce((accum, curr) => {
        accum.push(callback(curr));
        return accum;
    }, []);
});

const nums = [1, 2, 3, 4, 5];
const greaterThan3 = num => num > 3;
const multiplyBy3 = num => num * 3;


assert.deepEqual(filter(greaterThan3, nums), [4, 5]);
assert.deepEqual(map(multiplyBy3, nums), [3, 6, 9, 12, 15]);

console.log('All tests passed!');