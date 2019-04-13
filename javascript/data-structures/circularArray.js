 class CircularArray {
     constructor() {
         this.items = []
         this.count = 0
     }
     returnCircularIndex(index) {
        return index % this.count
     }
     push(item) {
         if (!item) {
             return null
         }
         this.items.push(item)
         this.count++
         return this.count
     }
     pop() {
         if (!this.count) {
             return null
         }
         return this.items[this.count - 1]
     }
     peekAt(index) {
         if (!index) {
             return null
         }
        const circularIndex = this.returnCircularIndex(index)
        return this.items[circularIndex]
     } 
     getLength() {
         return this.count
     }
     convertToCircularArray(array) {
         if (!array) {
             return null
         }
         if (!array.length) {
             return []
         }
         for (let i = 0; i < array.length; i++) {
             this.push(array[i])
         }
         return this.items
     }
 }