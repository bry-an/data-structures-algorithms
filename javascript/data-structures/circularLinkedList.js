import { defaultEquals } from "./util";
import { Node } from "../models/linked-list-models";
import LinkedList from "./linkedList";

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let trav = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = trav;
          trav = this.getElementAt(this.size());
          this.head = node;
          trav.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let trav = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          trav = this.getElementAt(this.size());
          this.head = this.head.next;
          trav.next = this.head;
          trav = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        trav = previous.next;
        previous.next = trav.next;
      }
      this.count--;
      return trav.element;
    }
  }
}
