class Deque {
    constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
    }

    size () {
        return this.count - this.lowestCount
    }
    isEmpty() {
        return this.size() === 0 
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if(this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.items[0] = element
        }
    
    }
    removeFront() {
        if(this.isEmpty()) {
            return undefined
        }
        const item = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return item
    }
    removeBack() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--
        const item = this.items[this.count]
        delete this.items[this.count]
        return item
    }
    peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
        return this.items[this.lowestCount]
    }
    peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
        return this.items[this.count -1]
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }

}
module.exports = Deque

//Hot potato game



function palindromeChecker(string) {
    if (string === undefined || string === null ||
        (string !== null && string.length === 0))
            return false;
    
    const deque = new Deque()
    const lowerString = string.toLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar, lastChar

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
}

// console.log('panama', palindromeChecker('a man a plan a canal panama'))

function anotherPalindrome(string) {
    let keepGoing = true;
    const lowerString = string.toLowerCase()
    const stringLen = string.length

    for (let i = 0, j = stringLen - 1; i < Math.floor(stringLen / 2), j > Math.ceil(stringLen / 2); i++, j--) {
        if (lowerString.charAt(i) !== lowerString.charAt(j)) {
            keepGoing = false;
            break
        }
    }
    return keepGoing
}

console.log('bryrb', anotherPalindrome('bryrb'))