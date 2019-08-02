const assert = require("assert");

const Cons = function (head, left, right) {
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

const treebuilder = (elements, tree = Nil) => {
  if (!elements[0]) {
    return tree
  }

  return treebuilder(elements.slice(1), addElement(tree, elements[0]))
}


const search = (tree, element) => {
  if (!tree || tree.isEmpty) {
    return false
  }
  if (tree.head === element) {
    return true
  }
  if (tree.head > element) {
    return search(tree.left, element)
  }
  else {
    return search(tree.right, element)
  }

  return false
}



// tests
assert.equal(
  search(
    treebuilder([5, 8, 21, 15, 4]),
    5
  ),
  true
);

assert.equal(
  search(
    treebuilder([5, 8, 21, 15, 4]),
    7
  ),
  false
)








