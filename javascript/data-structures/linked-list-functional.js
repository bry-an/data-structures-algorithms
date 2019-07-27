const assert = require('assert');

const Cons = function (head, tail) {
    this.head = head;
    this.tail = tail;
};

Cons.prototype.isEmpty = false;

// nil is similar to null value
const Nil = {
    isEmpty: true,

    getHead() {
        throw new Error('Cannot access head element on empty list')
    },
    getTail() {
        throw new Error('Cannot access tail element on empty list')
    }
}

// a helper function to create lists
const cell = function (head, tail) {
    return new Cons(head, tail);
}

// helper to build larger lists
const listBuilder = function () {
    if (arguments.length === 0) {
        return Nil;
    }
    const head = arguments[0];
    const tail = [].slice.call(arguments, 1);
    return cell(head, listBuilder.apply(null, tail));
}


// some common methods to play with the lists

// map
const map = function (list, fn) {
    if (list.isEmpty) return list;

    return cell(fn(list.head), map(list.tail, fn))
}

// reduce
const reduce = function (list, fn, accum) {
    if (list.isEmpty) return accum;
    return reduce(list.tail, fn, fn(accum, list.head))
}

// display list with array formatting
const print = (accum, curr) => {
    accum.push(curr);
    return accum
}

// sample callbacks
const double = element => element * 2;
const sum = (accum, curr) => accum + curr

// tests
const testList = listBuilder(1, 2, 3, 4, 5)

const testListArray = reduce(testList, print, [])
assert.deepEqual(testListArray, [1, 2, 3, 4, 5])

const testMap = map(testList, double)
const testMapArray = reduce(testMap, print, [])
assert.deepEqual(testMapArray, [2, 4, 6, 8, 10])

const testReduce = reduce(testList, sum, 0)
assert.equal(testReduce, 15)
















