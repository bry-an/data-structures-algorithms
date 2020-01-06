
const assert = require('assert');

const every = (arr, fn) => {
    if (!arr.length) {
        return true;
    }
    return fn(arr[0]) ? every(arr.slice(1), fn) : false;
};

const forEach = (arr, fn) => {
    if (!arr.length) {
        return;
    }
    const fnVal = fn(arr[0]);
    return fnVal || forEach(arr.slice(1), fn);
};

const some = (arr, fn) => {
    if (!arr.length) {
        return false;
    }
    return fn(arr[0]) ? true : some(arr.slice(1), fn);
};

const map = (arr, fn, returnArr = []) => {
    if (!arr.length) {
        return returnArr;
    }
    returnArr.push(fn(arr[0]));
    return map(arr.slice(1), fn, returnArr);
};

const filter = (arr, fn, returnArr = []) => {
    if (!arr.length) {
        return returnArr;
    }
    if (fn(arr[0])) {
        returnArr.push(arr[0]);
        return filter(arr.slice(1), fn, returnArr);
    }
    return filter(arr.slice(1), fn, returnArr);
};


const reduce = (arr, fn, accum = 0) => {
    if (!arr.length) {
        return accum;
    }
    return reduce(arr.slice(1), fn, fn(arr[0], accum));
};

const add = (curr, accum) => curr + accum;
const forEachTest = (item) => {
    if (item === 3) {
        return item * 2;
    }
};


assert.deepEqual(reduce([1, 2, 3], add, 3), 9);
assert.deepEqual(some([1, 2, 3], (num) => num === 3 ), true);
assert.deepEqual(filter([1, 2, 3], (num) => num === 3), [3]);
assert.deepEqual(map([1, 2, 3], (num) => num * 2), [2, 4, 6]);
assert.deepEqual(every([1, 2, 3], (num) => num > 10), false);
assert.deepEqual(forEach([1, 2, 3], forEachTest), 6);



console.log('All tests passed!');