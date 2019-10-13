const assert = require('assert')

const letterCount = string => {
    const frequencyMap = new Map()
    const strArr = string.split('')

    strArr.forEach(char => {
        if (frequencyMap.has(char)) {
            let charFreq = frequencyMap.get(char)
            frequencyMap.set(char, ++charFreq)
        }
        else {
            frequencyMap.set(char, 1)
        }
    })
    let returnObj = {}
    frequencyMap.forEach((value, key) => {
        returnObj[key] = value
    })
    return returnObj
}


assert.deepEqual(letterCount("codewars"), { "a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1 });
assert.deepEqual(letterCount("activity"), { "a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1 });
assert.deepEqual(letterCount("arithmetics"), { "a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2 });
assert.deepEqual(letterCount("traveller"), { "a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1 });
assert.deepEqual(letterCount("daydreamer"), { "a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1 });