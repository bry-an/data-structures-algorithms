
const assert = require('assert')

const generateHashtag = string => {
    if (!string) {
        return false
    }
    const strArr = string.split(' ');

    let result = "#"
    for (let i = 0; i < strArr.length; i++) {
        const word = strArr[i].split('');
        if (word.length) {
            const [first, ...rest] = word
            result += `${first.toUpperCase()}${rest.join('')}`
        }
    }
    return result.length > 140 || result.length === 0 ? false : result
}

assert(generateHashtag(" ".repeat(200)), false, "Still an empty string")
assert(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
assert(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
assert(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
assert(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
assert(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
assert(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")