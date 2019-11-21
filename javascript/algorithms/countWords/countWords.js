
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
countWords("give a little get a little") //?

// using recursion (functional approach)
const countWordsRecur = (string, wordMap = {}) => {
    if (!string.length) {
        return wordMap
    }
    wordMap[string.split(' ')[0]] ? wordMap[string.split(' ')[0]] += 1 : wordMap[string.split(' ')[0]] = 1

    return countWordsRecur(string.split(' ').slice(1).join(' '), wordMap)
}
countWordsRecur("give a little get a little") //?