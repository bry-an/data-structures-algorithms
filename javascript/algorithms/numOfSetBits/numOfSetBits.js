const assert = require('assert')

const setBits = binaryNum => {
    const logBase2 = Math.log(binaryNum) / Math.log(2)

    if (parseInt(logBase2) === logBase2) {
        return logBase2 + 1
    } else {
        return Math.ceil(logBase2)
    }
}

const setBitsInAllIntegers = num => {
    const answer = []

    for (let i = 1; i <= num; i++) {
        answer.push(setBits(i))
    }
    return answer
}

assert.equal(setBitsInAllIntegers(1), 1)
assert.equal(setBitsInAllIntegers(8).length, 8)
assert.deepEqual(setBitsInAllIntegers(8), [1, 2, 2, 3, 3, 3, 3, 4])

