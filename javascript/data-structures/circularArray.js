export default class CircularArray {
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
         const selectedItem = this.items[this.count - 1]
         this.count--
         return selectedItem
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
     next(index) {
         return this.peekAt(index + 1)
     }
     previous(index) {
         return this.peekAt(index - 1)
     }
     maxSubarraySum() {
         let sum = 0
         let max = -Infinity
         let min = Infinity
         let negCount = 0
         let negSum = 0
         for (let i = 0; i < this.count; i++) {
             const item = this.items[i]
             if (item < min) {
                 min = item
             }
             if (item > max) {
                 max = item
             }
             if (item < 0) {
                 negSum += Math.abs(item)
                 negCount++
             }
             sum += item
         }
         if (negCount === 0) {
             return sum
         }
         else if (negCount === 1) {
             return sum + negSum
         }
         else return max
     }
 }