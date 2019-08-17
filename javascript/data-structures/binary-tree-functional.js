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
    throw new Error("Cannot access head element on empty tree");
  },
  getLeft() {
    throw new Error("Cannot access left element on empty tree");
  },
  getRight() {
    throw new Error("Cannot access right element on empty tree");
  }
};

const getHead = tree => {
  return tree.head;
};
const cell = (head, left, right) => {
  return new Cons(head, left, right);
};

const addElement = (tree, element) => {
  if (tree.isEmpty) {
    return cell(element, Nil, Nil);
  }
  if (element > tree.head) {
    return cell(tree.head, tree.left, addElement(tree.right, element));
  }
  if (element < tree.head) {
    return cell(tree.head, addElement(tree.left, element), tree.right);
  }
  return;
};

const myTree = cell(5, Nil, Nil);

const newTree = addElement(myTree, 6); //?
const anotherTree = addElement(newTree, 4); //?
addElement(anotherTree, 7); //?

// tests
