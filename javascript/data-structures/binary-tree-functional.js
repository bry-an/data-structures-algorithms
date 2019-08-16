const assert = require("assert");

const Cons = function(head, left, right) {
  this.head = head;
  this.left = left;
  this.right = right;
};

Cons.prototype.isEmpty = false;

const Nil = {
  isEmpty: true,

  getHead() {
    throw new Error("Cannot access head element on empty list");
  },
  getLeft() {
    throw new Error("Cannot access left element on empty list");
  },
  getRight() {
    throw new Error("Cannot access right element on empty list");
  }
};

const cell = (head, left, right) => {
  return new Cons(head, left, right);
};

const addElement = (list, element) => {
  if (list.isEmpty) {
    return cell(element, Nil, Nil);
  }
  if (element > list.head) {
    return cell(list.head, list.left, addElement(list.right, element));
  }
  if (element < list.head) {
    return cell(list.head, addElement(list.left, element), list.right);
  }
  return;
};

const myTree = cell(5, Nil, Nil);

const newTree = addElement(myTree, 6); //?
const anotherTree = addElement(newTree, 4); //?
addElement(anotherTree, 7); //?
