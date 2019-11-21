const assert = require('assert')

// using forEach
const countWords = string => {
    const wordMap = new Map()
    string.split(' ').forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1)
        } else {
            wordMap.set(word, 1)
        }
    })
    return wordMap
}

// using recursion (functional approach)
const countWordsRecur = (string, wordMap = {}) => {
    if (!string.length) {
        return wordMap
    }
    wordMap[string.split(' ')[0]] ? wordMap[string.split(' ')[0]] += 1 : wordMap[string.split(' ')[0]] = 1

    return countWordsRecur(string.split(' ').slice(1).join(' '), wordMap)
}


assert.deepEqual(countWordsRecur("give a little get a little"), {give: 1, a: 2, little: 2, get: 1})