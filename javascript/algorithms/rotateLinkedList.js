class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
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
  rotate(k) {
      let counter = 0
      let trav
      if (this.head == null || this.head.next == null) {
          return null
      } else {
          while (counter <= k) {
            const node = this.head
            trav = this.head
            this.head = trav.next
            while (trav.next != null) {
                trav = trav.next
                console.log("trav in loop", trav)
            }
            trav.next = node
            counter++
          }
      }
  }
}

const list = new LinkedList()
list.push(1)
list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// console.log(list)
list.rotate(1)
console.log(list)

