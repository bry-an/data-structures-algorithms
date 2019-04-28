function NodeLL(value) {
    this.value = value
    this.next = null

    return {
        value,
        next: this.next
    }
}

function LinkedList() {
    this.head = undefined

    this.push = function(element) {
        const node = new NodeLL(element)
        let trav
        if (this.head == null) {
            this.head = node
        } else {
            trav = this.head
            while (trav.next != null) {
                trav = trav.next
            }
            trav.next = node
        }
    }
    return {
        head: this.head,
        push: this.push
    }
}

const list = new LinkedList()
console.log(list)

list.push(1)
list.push(2)
list.push(3)

console.log(list)