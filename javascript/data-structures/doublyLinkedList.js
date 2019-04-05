import { defaultEquals } from "./util";
import { Node } from "../models/linked-list-models";
import LinkedList from './linkedList'

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let trav = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node
                } else {
                    node.next = this.head;
                    trav.prev = node;
                    this.head = node
                }
            }
            else if(index === this.count) {
                trav = this.tail;
                trav.next = node;
                node.prev = trav;
                this.tail = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                trav = previous.next;
                node.next = trav;
                previous.next = node;
                trav.prev = node;
                node.prev = previous;
            }
        }
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let trav = this.head;
            if (index === 0) {
                this.head = trav.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                trav = this.tail;
                this.tail = trav.prev;
                this.tail.next = undefined
            } else {
                trav = this.getElementAt(index);
                const previous = trav.prev;
                previous.next = trav.next;
                trav.next.prev = prev;
            }
            this.count--;
            return trav.element;
        }
    }


}