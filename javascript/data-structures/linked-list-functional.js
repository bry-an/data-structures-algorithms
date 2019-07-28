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

const removeElement = (list, element) => {
    if (list.isEmpty) return;
    if (list.head === element) {
        if (list.tail.isEmpty) {
            return Nil
        }
        const head = list.tail.head;
        const tail = list.tail.tail;
        return cell(head, tail)
    }
    return cell(list.head, removeElement(list.tail, element));
}

const anotherList = listBuilder(1, 2, 3);
anotherList
removeElement(anotherList, 3) //?


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


// some list methods
const getLength = list => {
    return reduce(list, (accum) => accum + 1, 0)
}

const has = (list, element) => {
    if (list.isEmpty) return false;
    if (list.head === element) return true;

    return has(list.tail, element)
}



// sample callbacks
const double = element => element * 2;
const sum = (accum, curr) => accum + curr

// tests
const testList = listBuilder(1, 2, 3, 4, 5);
assert.equal(has(testList, 1), true);
assert.equal(getLength(testList), 5);

const testListArray = reduce(testList, print, []);
assert.deepEqual(testListArray, [1, 2, 3, 4, 5]);

const testMap = map(testList, double);
const testMapArray = reduce(testMap, print, []);
assert.deepEqual(testMapArray, [2, 4, 6, 8, 10]);

const testReduce = reduce(testList, sum, 0);
assert.equal(testReduce, 15);
















