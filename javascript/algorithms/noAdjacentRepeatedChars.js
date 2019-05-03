function noAdjRepeatedChars(string) {
    const strArray = string.split("")
    const sorted = strArray.sort()
    let results = ""

    let i = 0
    while (sorted.length) {
        const firstChar = sorted.splice(1, 1)
        const secondChar = sorted.splice(sorted.length -1, 1)
        if (firstChar[0] === secondChar[0]) {
            return "None"
        }

        results += firstChar
        results += secondChar
        i++
    }
    return results
    
}
console.log(noAdjRepeatedChars("aaaabbc"))