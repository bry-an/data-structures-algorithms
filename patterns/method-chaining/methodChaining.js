function MethodChaining(array) {
    this.arr = array
}

MethodChaining.prototype.removeItem = function (item) {
    this.arr.splice(this.arr.indexOf(item), 1)
    return this // essential for method chaining
}


const items = new MethodChaining([1, 2, 3, 4])
items.removeItem(2).removeItem(3)
console.log(items)