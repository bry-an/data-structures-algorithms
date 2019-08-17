const assert = require("assert");

const Cons = function (head, tail) {
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
const listBuilder = function () {
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
assert.equal(
  has(
    listBuilder(1, 2, 3, 4, 5),
    1
  ),
  true
);

assert.equal(
  getLength(
    listBuilder(1, 2, 3, 4, 5)),
  5
);

// test get
assert.equal(
  get(
    listBuilder(1, 2, 3, 4, 5),
    1
  ),
  2
);

// test indexOf
assert.equal(
  indexOf(
    listBuilder(1, 2, 3, 4, 5),
    3
  ),
  2
);

//test has
assert.equal(
  has(
    listBuilder(1, 2, 3, 4, 5),
    1
  ),
  true
);

// test map
assert.deepEqual(
  reduce(
    map(
      listBuilder(1, 2, 3, 4, 5),
      double),
    print,
    []
  ),
  [2, 4, 6, 8, 10]
);

//test reduce
assert.equal(
  reduce(
    listBuilder(1, 2, 3, 4, 5),
    sum,
    0
  ),
  15
);

// test addElement
assert.equal(
  has(
    addElement(
      listBuilder(1, 2, 3),
      4),
    4
  ),
  true
);

// test removeElement
assert.deepEqual(
  reduce(
    removeElement(
      listBuilder(1, 2, 3),
      2),
    print,
    []
  ),
  [1, 3]
);
