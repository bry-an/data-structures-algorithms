const assert = require("assert");

const Cons = function(head, tail) {
  this.head = head;
  this.tail = tail;
};

Cons.prototype.isEmpty = false;

// nil is similar to null value
const Nil = {
  isEmpty: true,

  getHead() {
    throw new Error("Cannot access head element on empty list");
  },
  getTail() {
    throw new Error("Cannot access tail element on empty list");
  }
};

// a helper function to create lists
const cell = (head, tail) => {
  return new Cons(head, tail);
};

// helper to build larger lists
const listBuilder = function() {
  if (arguments.length === 0) {
    return Nil;
  }
  const head = arguments[0];
  const tail = [].slice.call(arguments, 1);
  return cell(head, listBuilder.apply(null, tail));
};

const addElement = (list, element) => {
  if (list.isEmpty) {
    return cell(element, Nil);
  }
  return cell(list.head, addElement(list.tail, element));
};

const removeElement = (list, element) => {
  if (list.isEmpty) return;
  if (list.head === element) {
    if (list.tail.isEmpty) {
      return Nil;
    }
    const head = list.tail.head;
    const tail = list.tail.tail;
    return cell(head, tail);
  }
  return cell(list.head, removeElement(list.tail, element));
};

// some common methods to play with the lists

// map
const map = (list, fn) => {
  if (list.isEmpty) return list;

  return cell(fn(list.head), map(list.tail, fn));
};

// reduce
const reduce = (list, fn, accum) => {
  if (list.isEmpty) return accum;
  return reduce(list.tail, fn, fn(accum, list.head));
};

// display list with array formatting (cb for reduce)
const print = (accum, curr) => {
  accum.push(curr);
  return accum;
};

// some list methods
const getLength = list => {
  return reduce(list, accum => accum + 1, 0);
};

const has = (list, element) => {
  if (list.isEmpty) return false;
  if (list.head === element) return true;

  return has(list.tail, element);
};

const get = (list, index, count) => {
  if (list.isEmpty) return -1;
  count = count || 0;

  if (count === index) {
    return list.head;
  }
  return get(list.tail, index, count + 1);
};

const indexOf = (list, element, index = 0) => {
  if (list.isEmpty) return -1;
  if (list.head === element) {
    return index;
  }
  return indexOf(list.tail, element, index + 1);
};

//tests

// sample callbacks
const double = element => element * 2;
const sum = (accum, curr) => accum + curr;

//test list
const testList = listBuilder(1, 2, 3, 4, 5);
assert.equal(has(testList, 1), true);
assert.equal(getLength(testList), 5);

// test get
// testList = 1, 2, 3, 4, 5
assert.equal(get(testList, 1), 2);

// test indexOf
// testList = 1, 2, 3, 4, 5
assert.equal(indexOf(testList, 3), 2);

//test has
const testHas = has(testList, 1);
assert.equal(testHas, true);

// test map
const testMap = map(testList, double);
const testMapArray = reduce(testMap, print, []);
assert.deepEqual(testMapArray, [2, 4, 6, 8, 10]);

//test reduce
const testReduce = reduce(testList, sum, 0); // testList: 1, 2, 3, 4, 5
assert.equal(testReduce, 15);

// test addElement
const testList2 = listBuilder(1, 2, 3);
const testAddList = addElement(testList2, 4);
assert.equal(has(testAddList, 4), true);

// test removeElement
const testRemoveList = removeElement(testList2, 2);
const testRemoveArray = reduce(testRemoveList, print, []);
assert.deepEqual(testRemoveArray, [1, 3]);
