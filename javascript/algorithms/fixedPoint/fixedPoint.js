const assert = require('assert')

const fixedPoint = array => {
    for (let i = 0; i < array.length; i++) {
    // if the index is equal to the value of the item
        if (i === array[i]) { // if there's a fixed point
        // return that item
        return array[i]
        }
    }
    return false
}

assert.equal(fixedPoint([-6, 0, 2, 40]), 2)
assert.equal(fixedPoint([1, 5, 7, 8]), false)
