import LinkedList from "./linkedList";
import { defaultEquals } from "./util";

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare(a,b) {
    if (a === b) {
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const trav = this.getIndexNextSortedElement(element)
        return super.insert(element, trav);
    }
    getIndexNextSortedElement(element) {
        let trav = this.head;
        let i = 0;
        for (; i < this.size() && trav; i++) {
            const comp = this.compareFn(element, trav.element)
            if (comp === Compare.LESS_THAN) {
                return i
            }
            trav = trav.next;
        }
        return i
    }
}