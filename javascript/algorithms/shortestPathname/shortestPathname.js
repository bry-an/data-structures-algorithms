class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    push(element) {
        const node = new Node(element)
        let trav
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            trav = this.tail
            trav.next = node
            node.prev = trav
            this.tail = node
        }
    }
    removeTail() {
        let trav = this.tail
        this.tail = trav.prev
        trav.prev.next = null
    }
    stringifyListIntoDirectory() {
        let trav
        let result = "/"
        if (this.head === null) {
            return ""
        } else {
            trav = this.head
            while (trav != null) {
                result = result.concat(trav.element).concat("/")
                trav = trav.next
            }
        }
        return result
    }
}
const list = new LinkedList()

function splitPathIntoDirectories(str) {
    const tmp = str.split("/") // split the string into a list of directory names or operators
    const directories = []
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] !== "" && tmp[i] !== ".") { // forget about empty strings or the period operator, the latter having no effect
            directories.push(tmp[i])
        }
    }
    return directories
}

function constructDirectoryLinkedList(str) {
    const parsedDirectories = splitPathIntoDirectories(str)
    const directories = new LinkedList()

    for (let i = 0; i < parsedDirectories.length; i++) {
        if (parsedDirectories[i] !== "..") { // add any directories to LL that aren't ".."
            directories.push(parsedDirectories[i])
        } else if (parsedDirectories[i] === "..") { // if we come across a "..", remove the last folder
            directories.removeTail()
        }
    }
    return directories
}

function shortestPathname(string) {
    const directoryList = constructDirectoryLinkedList(string) // create a LL with a list of the shortest paths

    return directoryList.stringifyListIntoDirectory() // stringify that list and insert '/'s where necessary
}

console.log(shortestPathname("/usr/bin/bryan/../yunis/./cool")) // prints /user/bin/yunis/cool/


