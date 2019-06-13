const assert = require("assert")

function powerOfFour(num) {
    const result = Math.pow(num, .25)
    if (result % 1 === 0) {
        return true
    }
    return false
}


const expected16 = powerOfFour(16)
const expected12 = powerOfFour(12)

assert.equal(expected16, true, "function fails: test input of 16 should return true")
assert.equal(expected12, true, "function passes: test input of 12 returns false")