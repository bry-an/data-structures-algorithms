function oneEdit(string1, string2) {
    const str1Len = string1.length
    const str2Len = string2.length
    const str1Arr = string1.split("")
    const str2Arr = string2.split("")
    let result = ""

    // if the the difference between the two strings' lengths is one, we know that an insertion must take place
    if (str1Len + 1 === str2Len || str1Len - 1 === str2Len) {
        str1Len > str2Len ? result = findExtraCharacter(str1Arr, str2Arr) : result = findExtraCharacter(str2Arr, str1Arr)
        return `Insert ${result}`
    }
    // if their lengths are the same, check if we can swap one character for another
    if (str1Len === str2Len) {
        result = checkSwap(str1Arr, str2Arr)
        // result will contain an array of the differences between the two strings. If this array is of 
        // length 2, we know that a swap can occur. If it's of length 0, the strings are identical (no differences).
        // if anything else, the strings are the same length but are more than one edit apart
        if (result.length === 2) {
            return `Swap ${result[0]} and ${result[1]}`
        }
        else if (result.length === 0) {
            return "The two strings are identical"
        }
        else return "The two strings are greater than one edit apart"
    }
    else {
        return "The two strings are greater than one edit apart"
    }
}

function findExtraCharacter(longer, shorter) {
    let frequency = new Array(128).fill(0)
    let result = ""

    for (let i = 0; i < shorter.length; i++) {
        frequency[shorter[i].charCodeAt(0)]++
    }
    for (let i = 0; i < longer.length; i++) {
        frequency[longer[i].charCodeAt(0)]--
        if (frequency[longer[i].charCodeAt(0)] < 0) {
            // since frequency keeps an array of the differences between the two strings according to their 
            // UTF-8 character code, any non-zero item (in this case, any negative item) will indicate a difference
            result = longer[i]
            break
        }
    }
    return result
}

function checkSwap(array1, array2) {
    let frequency = new Array(128).fill(0)
    let result = []
    // same concept as findExtraCharacter except we expect two differences if a swap is possible
    // push those differences into an array

    for (let i = 0; i < array1.length; i++) {
        frequency[array1[i].charCodeAt(0)]++
    }
    for (let i = 0; i < array2.length; i++) {
        frequency[array2[i].charCodeAt(0)]--
    }
    for (let i = 0; i < frequency.length; i++) {
        if (frequency[i] !== 0) {
            // a character exists in one string that doesn't exist in the other
            result.push(String.fromCharCode(i))
        }
    }
    return result
}
console.log(oneEdit("dog", "dog")) // The two strings are identical
console.log(oneEdit("god", "gold")) // Insert l
console.log(oneEdit("help", "kelp"))// swap h and k
console.log(oneEdit("help", "aFriend"))// the two strings are greater than one edit apart

