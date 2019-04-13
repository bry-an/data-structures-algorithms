function findPattern(string, pattern) {
    let frequencyArr = new Array(string.length).fill(0) 
    // this array will store the frequency of similar characters between string and pattern
    // at the index corresponding to the starting index of similarity in the string

    let j = 0
    let i = 
    while (j < string.length) {
        if (string[j + i] === pattern[i]) {
            frequencyArr[j]++ // increment the frequency array for each match
            
        } else {
            j+=i + 1
            i = 0
        }
        if (i === pattern.length - 1) { // if we've reached the end of the pattern string, reset the iteration variable
            j += i + 1
            i = 0
        }
    }
    console.log(frequencyArr)
    let results = []
    for (let i = 0; i < frequencyArr.length; i++) {
        if (frequencyArr[i] === pattern.length) { // for any values in the frequency array that match the length of our pattern, it was a total match, so push to results array
            results.push(i)
        }
    }
    return results
}

console.log(findPattern("abracadabra", "abr"))