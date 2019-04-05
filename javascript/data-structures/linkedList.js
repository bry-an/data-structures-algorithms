import { defaultEquals } from "./util";
import { Node } from "../models/linked-list-models";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let trav;
    if (this.head == null) {
      this.head = node;
    } else {
      trav = this.head;
      while (trav.next != null) {
        trav = trav.next;
      }
      trav.next = node;
    }
    this.count++;
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let trav = this.head;
      if (index === 0) {
        this.head = trav.next;
      } else {
        const previous = this.getElementAt(index - 1);
        trav = previous.next;
        previous.next = trav.next
        // skip the element (index) we want to remove
      }
      this.count--;
      return trav.element;
    }
    return undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const trav = this.head;
        node.next = trav;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const trav = previous.next;
        node.next = trav;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element) {
    let trav = this.head;
    for (let i = 0; i < this.count && trav != null; i++) {
      if (this.equalsFn(element, trav.element)) {
        return i;
      }
      trav = trav.next
    }
    return -1;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() { // implemented because head should be a private variable
    return this.head;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let trav = this.head.next;
    for (let i = 1; i < this.size() && trav != null; i++) {
      objString = `${objString},${trav.element}`
      trav = trav.next
    }
    return objString
  }
  clear() {
    this.count = 0;
    this.head = undefined;
  }
}
